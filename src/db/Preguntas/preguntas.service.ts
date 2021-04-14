import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Pregunta } from './entities/preguntas.entity';
import { UsersService } from '../users/users.service';
import { LikeuservideosService } from '../likeuservideos/likeuservideos.service';
import { UservideosService } from '../uservideos/uservideos.service';
import createObjectVideo from '../../utils/createObject';
import checkPercentage from '../../utils/checkPercentage';

@Injectable()
export class VideosService {
  constructor(
    @InjectRepository(Pregunta)
    private readonly videoRepository: Repository<Pregunta>,
    private userService: UsersService,
    private likeUserVideosService: LikeuservideosService,
    private userVideosService: UservideosService,
  ) {}
  
}
