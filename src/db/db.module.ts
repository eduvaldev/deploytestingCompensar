import { Module } from '@nestjs/common';
import { DbService } from './db.service';
import { DbController } from './db.controller';
import { UsersModule } from './users/users.module';
import { LikeuservideosModule } from './likeuservideos/likeuservideos.module';
import { RolsModule } from './rols/rols.module';
import { StatesModule } from './states/states.module';
import { UservideosModule } from './uservideos/uservideos.module';
import { VideosModule } from './videos/videos.module';

@Module({
  imports: [
    UsersModule,
    LikeuservideosModule,
    RolsModule,
    StatesModule,
    UservideosModule,
    VideosModule,
  ],
  controllers: [DbController],
  providers: [DbService],
})
export class DbModule {}
