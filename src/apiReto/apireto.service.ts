import { Injectable } from '@nestjs/common';
import { UsersService } from '../db/users/users.service';
import { UserselectretoService } from '../db/userselectreto/userselecreto.service';

@Injectable()
export class apiRetosService {
  constructor(
    private readonly userName: UsersService,
    private userselectretoService: UserselectretoService
  ){}

  async findAll(user_id: number){
    const user = await this.userName.findUser(user_id);
    const data = {
      retoMayorSaludable : null,
      retoMayorSabio : null,
      retoMayorFeliz : null,
    }
    const preguntasUser = await this.userselectretoService.findAllUserRetos(user.id);
    preguntasUser.map(reto => {
      if( reto.selectreto_id.type === 'mayor saludable' ){
        data.retoMayorSaludable = reto;
      }else if(reto.selectreto_id.type === 'mayor sabio'){
        data.retoMayorSabio = reto;
      }else if(reto.selectreto_id.type === 'mayor feliz'){
        data.retoMayorFeliz = reto;
      }
    })
    const result = {
      data: {
        data: data,
      },
      code: 200,
    };
    return result;
  }
}