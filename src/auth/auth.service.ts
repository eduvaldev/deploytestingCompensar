import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from '../db/users/dto/login.dto';
import { UsersService } from '../db/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private userService: UsersService,
  ) {}

  async validateUser(username: any): Promise<any> {
    const obj: CreateUserDto = {
      document_type: username.TIPODOCUMENTO,
      identification_number: username.NUMERODOCUMENTO,
      password: username.CONTRASENA,
    };
    const user = await this.userService.findByUser(obj);
    if (user) {
      return user;
    }
    return null;
  }

  async payloadUser(user: CreateUserDto) {
    const result = await this.validateUser(user);
    if (!result) {
      throw new UnauthorizedException();
    }
    const payload = {
      user: result.identification_number,
      username: result.identification_number,
      created_at: result.created_at,
      document_type: result.document_type,
      sub: result.id,
    };
    return {
      id: result.id,
      documento: result.document_type,
      user: result.identification_number,
      access_token: this.jwtService.sign(payload),
      token_type: 'bearer',
      expires_in: 99999999,
    };
  }
}
