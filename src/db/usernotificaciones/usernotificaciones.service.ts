import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Usernotificaciones } from './entities/usernotificaciones.entity';

@Injectable()
export class UserNotifiacionesService {
  constructor(
    @InjectRepository(Usernotificaciones)
    private readonly userNotificacionesRepository: Repository<Usernotificaciones>,
  ) {}

  async findAllUserNotificaciones(id: number){
    const userNotifications = await this.userNotificacionesRepository.find({
      where: [
        {
          user_id: id,
        },
      ],
      relations: ['notificaciones_id'],
    });
    return userNotifications;
  }
}
