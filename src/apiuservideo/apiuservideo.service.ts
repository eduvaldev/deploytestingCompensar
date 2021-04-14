import { Injectable } from '@nestjs/common';
import checkPercentage from '../utils/checkPercentage';
import { UsersService } from '../db/users/users.service';
import { UservideosService } from '../db/uservideos/uservideos.service';
import { VideosService } from '../db/videos/videos.service';

@Injectable()
export class UservideoService {
  constructor(
    private readonly usersService: UsersService,
    private userVideosService: UservideosService,
    private videoService: VideosService,
  ) {}

  async update(body: any, user_id: number) {
    const validation = this.validations(body);
    if (validation === false) {
      const videoId = parseInt(body.video_id);
      const stopped = parseFloat(body.stopped_at);
      const user = await this.usersService.findUser(user_id);
      const videoUserCheck = await this.userVideosService.findUserVideo(
        videoId,
        user.id,
      );
      const video = await this.videoService.findOne(videoId);
      if (!video) return this.returnAnswer(422, 'Video no encontrado.');
      let videoUser: any;
      if (!videoUserCheck) {
        videoUser = {
          percentage: checkPercentage(parseFloat(video.duration), stopped),
          user_id: user.id,
          video_id: videoId,
          stopped_at: stopped,
        };
        const create = await this.userVideosService.create({ ...videoUser });
        console.log(create);
      } else {
        videoUser = {
          id: videoUserCheck.id,
          percentage: checkPercentage(parseFloat(video.duration), stopped),
          user_id: user.id,
          video_id: videoId,
          stopped_at:
            stopped > parseFloat(video.duration) ? video.duration : stopped,
        };
        await this.userVideosService.update(videoUser);
      }
      const result = this.videoService.getOneVideo(video.id, user_id);
      return result;
    }
    return validation;
  }

  returnAnswer(code: number, message: string) {
    const answer = {
      data: {
        message: [message],
      },
      code: code,
    };
    return answer;
  }

  private validations(body: any) {
    let errorResult;
    // const re = /[0-9]/g;
    // const re2 = /[0-9.]/g;
    if (!body.video_id) {
      errorResult = this.returnAnswer(422, 'El campo video id es requerido.');
      return errorResult;
    }
    if (!body.stopped_at) {
      errorResult = this.returnAnswer(422, 'El campo stopped_at es requerido.');
      return errorResult;
    }
    if (isNaN(parseFloat(body.stopped_at))) {
      errorResult = this.returnAnswer(
        422,
        'El campo stopped_at debe ser numerico.',
      );
      return errorResult;
    }
    if (isNaN(parseInt(body.video_id))) {
      errorResult = this.returnAnswer(
        422,
        'El campo video id debe ser numerico.',
      );
      return errorResult;
    }
    return false;
  }
}
