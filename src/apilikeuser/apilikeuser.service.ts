import { Injectable } from '@nestjs/common';
import { LikeuservideosService } from '../db/likeuservideos/likeuservideos.service';
import { VideosService } from '../db/videos/videos.service';
import { UsersService } from '../db/users/users.service';

@Injectable()
export class LikeuserService {
  constructor(
    private likeUserService: LikeuservideosService,
    private videoService: VideosService,
    private usersService: UsersService,
  ) {}

  returnAnswer(code: number, message: string) {
    const answer = {
      data: {
        message: [message],
      },
      code: code,
    };
    return answer;
  }

  validations(body: any) {
    let errorResult;
    const re = /[0-9]/g;
    if (!body.type) {
      errorResult = this.returnAnswer(422, 'El campo type es requerido.');
      return errorResult;
    }
    if (!body.video_id) {
      errorResult = this.returnAnswer(422, 'El campo video id es requerido.');
      return errorResult;
    }
    if (isNaN(parseInt(body.video_id))) {
      errorResult = this.returnAnswer(
        422,
        'El campo video id debe ser numerico.',
      );
      return errorResult;
    }
    const matchArray = body.video_id.match(re).join('');
    if (matchArray !== body.video_id) {
      errorResult = this.returnAnswer(
        422,
        'El campo video id debe ser numerico.',
      );
      return errorResult;
    }
    if (body.type !== 'like' && body.type !== 'dislike') {
      errorResult = this.returnAnswer(
        422,
        'El campo type debe ser like o dislike.',
      );
      return errorResult;
    }
    return false;
  }

  async update(body: any, user_id: number) {
    const validation = this.validations(body);
    let result;
    if (validation === false) {
      const user = await this.usersService.findUser(user_id);
      const likeUsercheck: any = await this.likeUserService.findOneLikeUser(
        parseInt(body.video_id),
        user.id,
      );
      let likeUser: any;
      if (likeUsercheck === null) {
        likeUser = {
          type: body.type,
          user_id: user.id,
          video_id: body.video_id,
        };
        const create: any = await this.likeUserService.create({ ...likeUser });
        result = this.videoService.getOneVideo(
          parseInt(create.video_id),
          user_id,
        );
        return result;
      }
      likeUser = {
        id: likeUsercheck.id,
        type: body.type,
        user_id: likeUsercheck.user_id.id,
        video_id: likeUsercheck.video_id.id,
      };
      const post: any = await this.likeUserService.create({ ...likeUser });
      result = this.videoService.getOneVideo(parseInt(post.video_id), user_id);
      return result;
    }
    return validation;
  }
}
