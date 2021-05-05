import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Userselectreto } from './entities/userselecreto.entity'

@Injectable()
export class UserselectretoService {
  constructor(
    @InjectRepository(Userselectreto)
    private readonly userSelectRetoRepository: Repository<Userselectreto>,
  ) {}

  async findAllUserRetos(id: number){
    const userPreguntas = await this.userSelectRetoRepository.find({
      where: [
        {
          user_id: id,
        },
      ],
      relations: ['selectreto_id'],
    });
    return userPreguntas;
  }
}