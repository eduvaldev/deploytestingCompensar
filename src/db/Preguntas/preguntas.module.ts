import { Module } from '@nestjs/common';
import { PreguntasService } from './preguntas.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pregunta } from './entities/preguntas.entity';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forFeature([Pregunta]),
  ],
  providers: [PreguntasService],
  exports: [PreguntasService],
})
export class PreguntasModule {}
