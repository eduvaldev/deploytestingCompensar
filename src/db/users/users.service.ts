import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './entities/users.entity';
import { CreateUserDto } from './dto/login.dto';
import {getConnection} from "typeorm";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private userRepository: Repository<Users>,
  ) {}

  async findAllUser (){
    const result = await this.userRepository.find();
    return result;
  }

  /* async createUser(user: CreateUserDto) {
    const document = await this.findByUser(user);
    if (document) return document;
    const obj: any = user;
    const result = await this.userRepository.create(obj);
    console.log(result);
    return await this.userRepository.save(result);
  } */

  async createUser(user: CreateUserDto) {
    const obj: any = user;
    await getConnection()
        .createQueryBuilder()
        .insert()
        .into(Users)
        .values([obj])
        .execute();
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
