import { Injectable } from '@nestjs/common';
import { UserPreguntasService } from '../db/userpregunta/userpregunta.service';
import { UsersService } from '../db/users/users.service';

@Injectable()
export class PreguntaService {
  constructor(
    private readonly userName: UsersService,
    private userPreguntaService: UserPreguntasService,
  ) {}

  async findAll(user_id: number){
    const user = await this.userName.findUser(user_id);
    const data = {
      preguntasHs : null,
      preguntasCp : null,
      preguntasBs : null,
      preguntasCm : null,
    }
    const preguntasUser = await this.userPreguntaService.findAllUserPreguntas(user.id);
    data.preguntasHs = preguntasUser.filter( pregunta => pregunta.pregunta_id.type === 'HS');
    data.preguntasCp = preguntasUser.filter( pregunta => pregunta.pregunta_id.type === 'CP');
    data.preguntasBs = preguntasUser.filter( pregunta => pregunta.pregunta_id.type === 'BS');
    data.preguntasCm = preguntasUser.filter( pregunta => pregunta.pregunta_id.type === 'CM');
    const result = {
      data: {
        data: data,
      },
      code: 200,
    };
    return result; 
  }
}
