import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { States } from './entities/state.entity';

@Injectable()
export class StatesService {
  constructor(
    @InjectRepository(States)
    private readonly stateRepository: Repository<States>,
  ) {}
}
