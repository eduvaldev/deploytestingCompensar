import { Module } from '@nestjs/common';
import { UservideoService } from './apiuservideo.service';
import { UservideoController } from './apiuservideo.controller';
import { UsersModule } from '../db/users/users.module';
import { UservideosModule } from '../db/uservideos/uservideos.module';
import { VideosModule } from '../db/videos/videos.module';

@Module({
  imports: [UsersModule, UservideosModule, VideosModule],
  controllers: [UservideoController],
  providers: [UservideoService],
  exports: [UservideoService],
})
export class ApiuservideoModule {}
