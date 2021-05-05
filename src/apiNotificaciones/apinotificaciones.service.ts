import { Injectable } from '@nestjs/common';
import { UserNotifiacionesService } from '../db/usernotificaciones/usernotificaciones.service';
import { UsersService } from '../db/users/users.service';

@Injectable()
export class ApiNotificacionesService {
  constructor(
    private readonly userName: UsersService,
    private userNotificacionesService: UserNotifiacionesService,
  ) {}

  async findAll(user_id: number){
    const user = await this.userName.findUser(user_id);
    const data = {
      notfGeneral : null,
      notReto : null,
    }
    const preguntasUser = await this.userNotificacionesService.findAllUserNotificaciones(user.id);
    data.notfGeneral = preguntasUser.filter(notf => notf.notificaciones_id.subtype === null);
    data.notReto = preguntasUser.filter(notf => notf.notificaciones_id.subtype !== null);
    const result = {
      data: {
        data: data,
      },
      code: 200,
    };
    return result; 
  }
}
