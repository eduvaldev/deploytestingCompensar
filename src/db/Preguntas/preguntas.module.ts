import { Module } from '@nestjs/common';
import { VideosService } from './preguntas.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pregunta } from './entities/preguntas.entity';
import { LikeuservideosModule } from '../likeuservideos/likeuservideos.module';
import { UsersModule } from '../users/users.module';
import { UservideosModule } from '../uservideos/uservideos.module';

@Module({
  imports: [
    UservideosModule,
    LikeuservideosModule,
    UsersModule,
    TypeOrmModule.forFeature([Pregunta]),
  ],
  providers: [VideosService],
  exports: [VideosService],
})
export class VideosModule {}
