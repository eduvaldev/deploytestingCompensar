import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './entities/users.entity';
import { CreateUserDto } from './dto/login.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private readonly userRepository: Repository<Users>,
  ) {}

  async createUser(user: CreateUserDto) {
    const document = await this.findByUser(user);
    if (document) return document;
    const obj: any = user;
    const result = this.userRepository.create(obj);
    return await this.userRepository.save(result);
  }

  async findByUser(user: CreateUserDto) {
    const result = await this.userRepository.findOne({
      where: [
        {
          document_type: user.document_type,
          identification_number: user.identification_number,
          password: user.password,
        },
      ],
    });
    return result;
  }

  async findUser(id: number) {
    const user = await this.userRepository.find({
      where: [
        {
          identification_number: id,
        },
      ],
    });
    return user[0];
  }
}
