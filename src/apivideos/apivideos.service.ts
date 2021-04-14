import { Injectable } from '@nestjs/common';
import { UsersService } from '../db/users/users.service';
import { VideosService } from '../db/videos/videos.service';

@Injectable()
export class ApiVideosService {
  constructor(
    private readonly userName: UsersService,
    private readonly videosService: VideosService,
  ) {}

  async findAll(id: number, type: string) {
    const user = await this.userName.findUser(id);
    let allVideos; 
    if(type){
      allVideos = await this.videosService.findAllType(type);
    }else {
      allVideos = await this.videosService.findAllVideos();
    }
    let data = [];
    for (const x in allVideos) {
      const dat = await this.videosService.getOneVideoResult(
        allVideos[x].id,
        user.identification_number,
      );
      data = data.concat(dat);
    }
    const result = {
      data: {
        data: data,
      },
      code: 200,
    };
    return result;
  }

  async getOneVideo(video: number, id_user: number) {
    return this.videosService.getOneVideo(video, id_user);
  }
}
