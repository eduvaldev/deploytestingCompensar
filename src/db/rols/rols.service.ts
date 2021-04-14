import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Rols } from './entities/rols.entity';

@Injectable()
export class RolsService {
  constructor(
    @InjectRepository(Rols)
    private readonly rolsRepository: Repository<Rols>,
  ) {}
}
