import { Module } from '@nestjs/common';
import { StatesService } from './states.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { States } from './entities/state.entity';

@Module({
  imports: [TypeOrmModule.forFeature([States])],
  providers: [StatesService],
  exports: [StatesService],
})
export class StatesModule {}
