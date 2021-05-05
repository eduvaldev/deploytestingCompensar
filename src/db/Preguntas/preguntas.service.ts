import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Pregunta } from './entities/preguntas.entity';
import { UsersService } from '../users/users.service';
import createObjectVideo from '../../utils/createObject';
import checkPercentage from '../../utils/checkPercentage';

@Injectable()
export class PreguntasService {
  /* constructor(
    @InjectRepository(Pregunta)
    private readonly preguntaRepository: Repository<Pregunta>,
    private userService: UsersService,
  ) {} */
  
  
}
