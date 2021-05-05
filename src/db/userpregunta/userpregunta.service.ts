import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Userpregunta } from './entities/userpregunta.entity';

@Injectable()
export class UserPreguntasService {
  constructor(
    @InjectRepository(Userpregunta)
    private readonly userPreguntasRepository: Repository<Userpregunta>,
  ) {}

  async findAllUserPreguntas(id: number){
    const userPreguntas = await this.userPreguntasRepository.find({
      where: [
        {
          user_id: id,
        },
      ],
      relations: ['pregunta_id'],
    });
    return userPreguntas;
  }
}
