import { Module } from '@nestjs/common';
import { ApiVideosService } from './apivideos.service';
import { ApiVideosController } from './apivideos.controller';
import { UsersModule } from '../db/users/users.module';
import { VideosModule } from '../db/videos/videos.module';
@Module({
  imports: [UsersModule, VideosModule],
  controllers: [ApiVideosController],
  providers: [ApiVideosService],
})
export class ApivideosModule {}
