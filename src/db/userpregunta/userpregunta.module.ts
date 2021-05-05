import { Module } from '@nestjs/common';
import { UserPreguntasService } from './userpregunta.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Userpregunta } from './entities/userpregunta.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Userpregunta])],
  providers: [UserPreguntasService],
  exports: [UserPreguntasService],
})
export class UserPreguntaModule {}