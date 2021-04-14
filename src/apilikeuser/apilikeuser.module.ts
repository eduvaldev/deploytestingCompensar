import { Module } from '@nestjs/common';
import { LikeuserService } from './apilikeuser.service';
import { LikeuserController } from './apilikeuser.controller';
import { LikeuservideosModule } from '../db/likeuservideos/likeuservideos.module';
import { VideosModule } from '../db/videos/videos.module';
import { UsersModule } from '../db/users/users.module';

@Module({
  imports: [LikeuservideosModule, VideosModule, UsersModule],
  controllers: [LikeuserController],
  providers: [LikeuserService],
  exports: [LikeuserService],
})
export class ApilikeuserModule {}
