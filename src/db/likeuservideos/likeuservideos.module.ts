import { Module } from '@nestjs/common';
import { LikeuservideosService } from './likeuservideos.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Likeuser } from './entities/likeuser.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Likeuser])],
  providers: [LikeuservideosService],
  exports: [LikeuservideosService],
})
export class LikeuservideosModule {}
