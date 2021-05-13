import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Enlaces } from './entities/enlaces.entity';
import {getRepository} from "typeorm";

@Injectable()
export class EnlacesService {
  constructor(
    @InjectRepository(Enlaces)
    private readonly enlacesRepository: Repository<Enlaces>,
  ){}

  async findAll() {
    const result = await getRepository(Enlaces)
                        .createQueryBuilder("textos")
                        .orderBy("textos.id")
                        .getMany();
    return result;
  }

  async findAllType(type: string){
    const data = await this.enlacesRepository.find({ where: { type: type } });
    return data;
  }

  async findOneId(id) {
    const result = await this.enlacesRepository.findOne({
      where: [
        {
          id: id,
        },
      ],
    });
    
    return result;
  }

  async updateEnlacetId(id, body) {
    const enlace = await getRepository(Enlaces).findOne(id);

    if (enlace) {
      getRepository(Enlaces).merge(enlace, body);
      const result = await getRepository(Enlaces).save(enlace);
      return result;
    }

    return {msg: 'Enlace no encontrado'};
  }
}