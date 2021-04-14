import { Module } from '@nestjs/common';
import { VideosService } from './videos.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Video } from './entities/videos.entity';
import { LikeuservideosModule } from '../likeuservideos/likeuservideos.module';
import { UsersModule } from '../users/users.module';
import { UservideosModule } from '../uservideos/uservideos.module';

@Module({
  imports: [
    UservideosModule,
    LikeuservideosModule,
    UsersModule,
    TypeOrmModule.forFeature([Video]),
  ],
  providers: [VideosService],
  exports: [VideosService],
})
export class VideosModule {}
