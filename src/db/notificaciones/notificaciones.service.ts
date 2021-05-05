import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Notificaciones } from './entities/notificaciones.entity';
import { UsersService } from '../users/users.service';

@Injectable()
export class NotificacionesService {
  constructor(
    @InjectRepository(Notificaciones)
    private readonly preguntaRepository: Repository<Notificaciones>,
    private userService: UsersService,
  ) {}
  
  
}
