import { Injectable } from '@nestjs/common';
import { UsersService } from '../db/users/users.service';

@Injectable()
export class apiUsuariosService {
  constructor(
    private userService: UsersService,
  ) {}

  async findAll(){
    const data = await this.userService.findAllUser();
    const result = {
      data: {
        data: data,
      },
      code: 200,
    };
    return result; 
  }

  async createOne(body){
    const data = await this.userService.createUser(body)
    const result = {
      data: {
        data: data,
      },
      code: 200,
    };
    return result;
  }
}
