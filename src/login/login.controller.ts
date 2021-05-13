import { Controller, Get, Post, Request } from '@nestjs/common';
import { AuthService } from '../auth/auth.service';

@Controller('api')
export class LoginController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async loginUser(@Request() req: any) {
    const payload = await this.authService.payloadUser(req.body);
    return payload;
  }

  @Get('admin')
  async tokenUser(){
    return 'Respuesta Token'
  }

  @Post('admin')
  async loginAdmin(@Request() req: any) {
    const data = await this.authService.payloadAdmin(req.body);
    const result = {
      data,
      code: 200,
    };
    return result;
  }
}
