import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Selectreto } from './entities/reto.entity';
import { UsersService } from '../users/users.service';
import { UservideosService } from '../uservideos/uservideos.service';

@Injectable()
export class RetoService {
  /* constructor(
    @InjectRepository(Selectreto)
    private readonly preguntaRepository: Repository<Selectreto>,
    private userService: UsersService,
    private userVideosService: UservideosService,
  ) {} */
  
  
}
