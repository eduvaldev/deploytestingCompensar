import { Module } from '@nestjs/common';
import { PreguntaService } from './apipreguntas.service';
import { PreguntasController } from './apipreguntas.controller';
import { UsersModule } from '../db/users/users.module';
import { UserPreguntaModule } from '../db/userpregunta/userpregunta.module';
@Module({
  imports: [UsersModule, UserPreguntaModule],
  controllers: [PreguntasController],
  providers: [PreguntaService],
})
export class ApiPreguntasModule {}