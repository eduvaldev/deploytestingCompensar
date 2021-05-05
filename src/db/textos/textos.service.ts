import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Textos } from './entities/textos.entity';
import {getRepository} from "typeorm";

@Injectable()
export class TextosService {
  constructor(
    @InjectRepository(Textos)
    private readonly textosRepository: Repository<Textos>,
  ){}

  async findText() {
    const result = await getRepository(Textos)
                        .createQueryBuilder("textos")
                        .orderBy("textos.id")
                        .getMany();
    return result;
  }

  async findTextId(id) {
    const result = await this.textosRepository.findOne({
      where: [
        {
          id: id,
        },
      ],
    });
    
    return result;
  }

  async updateTextId(id, body) {
    const texto = await getRepository(Textos).findOne(id);

    if (texto) {
      getRepository(Textos).merge(texto, body);
      const result = await getRepository(Textos).save(texto);
      return result;
    }

    return {msg: 'Texto no encontrado'}
  }
}