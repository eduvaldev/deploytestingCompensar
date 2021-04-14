import { Injectable } from '@nestjs/common';
import { UsersService } from './users/users.service';
import { CreateUserDto } from './users/dto/login.dto';

@Injectable()
export class DbService {
  constructor(private readonly usersService: UsersService) {}

  private csvJSON(csv) {
    const lines = csv.split('\n').join('').split('\r');
    const result = [];
    const headers = lines[0].split(',');
    for (let i = 1; i < lines.length; i++) {
      const obj = {};
      const currentline = lines[i].split(',');
      for (let j = 0; j < headers.length; j++) {
        obj[headers[j]] = currentline[j];
      }
      result.push(obj);
    }
    return JSON.parse(JSON.stringify(result)); //JSON
  }

  private createObject(data: any) {
    return {
      identification_number: parseInt(data.NUMERODOCUMENTO),
      document_type: data.TIPODOCUMENTO,
      password: data.CONTRASENA,
      created_at: data.created_at || new Date(),
      updated_at: data.updated_at || new Date(),
      state_id: data.state_id || 2,
      rol_id: data.rol_id || 1,
    };
  }

  async create(file: any) {
    const jsonData = this.csvJSON(file);
    let result = [];
    for (const element in jsonData) {
      if (parseInt(element) !== jsonData.length - 1) {
        const objCreated: CreateUserDto = this.createObject(jsonData[element]);
        const res = await this.usersService.createUser(objCreated);
        result = result.concat(res);
      }
    }
    return result;
  }
}
