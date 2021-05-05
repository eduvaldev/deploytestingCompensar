import { Injectable } from '@nestjs/common';
import { Repository, getRepository, getConnection } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Video } from './entities/videos.entity';
import { UsersService } from '../users/users.service';
import { LikeuservideosService } from '../likeuservideos/likeuservideos.service';
import { UservideosService } from '../uservideos/uservideos.service';
import createObjectVideo from '../../utils/createObject';
import checkPercentage from '../../utils/checkPercentage';

@Injectable()
export class VideosService {
  constructor(
    @InjectRepository(Video)
    private readonly videoRepository: Repository<Video>,
    private userService: UsersService,
    private likeUserVideosService: LikeuservideosService,
    private userVideosService: UservideosService,
  ) {}

  async findAllType(type: string){
    const data = await this.videoRepository.find({ where: { type: type } });
    return data;
  }

  async findAllVideos() {
    const data = await this.videoRepository.find();
    return data;
  }

  async findOne(id: number) {
    const user = await this.videoRepository.find({
      where: [
        {
          id,
        },
      ],
    });
    return user[0];
  }

  totalPercen(obj, videos) {
    let sum = 0;
    let qty = 0;
    for (const i in obj) {
      const percentage = obj[i].percentage;
      sum += percentage;
    }
    for (const i in videos) {
      const exists = videos[i].duration > 0 ? true : false;
      if (exists) qty++;
    }

    return (sum / qty).toFixed(1);
  }

  async getOneVideoResult(id_video: number, id: number) {
    const user = await this.userService.findUser(id);
    const likeUser: any = await this.likeUserVideosService.findOneLikeUser(
      id_video,
      user.id,
    );
    let userVideos: any = await this.userVideosService.findUserVideo(
      id_video,
      user.id,
    );
    const userVideosAll: any = await this.userVideosService.findUserVideoAll(
      user.id,
    );
    const videoo = await this.findOne(id_video);
    const allVideo = await this.findAllVideos();
    const check = this.totalPercen(userVideosAll, allVideo);

    if (!userVideos) {
      userVideos = {
        id: null,
        percentage: null,
        stopped_at: null,
        video_id: null,
      };
    }
    let data = [];
    const stop = userVideos.stopped_at ? parseFloat(userVideos.stopped_at) : 0;
    const totalPercentage = check;
    let likes;
    if (likeUser === null) {
      likes = {
        type: 'dislike',
      };
    } else {
      likes = {
        type: likeUser.type,
      };
    }

    const ob = {
      x: videoo,
      total: totalPercentage,
      percentage: checkPercentage(parseFloat(videoo.duration), stop),
      stopped_at: stop,
      id: userVideos.id,
      likeUser: likes.type,
    };
    const res = createObjectVideo(ob);
    data = data.concat(res);
    return data;
  }

  async getOneVideo(id_video: number, id: number) {
    const data: any = await this.getOneVideoResult(id_video, id);
    if (data === false) {
      const error = {
        data: {
          identification_number: ['El video no se encuentra.'],
        },
        code: 404,
      };
      return error;
    }
    const result = {
      data: {
        data: data,
      },
      code: 200,
    };
    return result;
  }

  /* async updateVideoId(id, body){
    console.log(body);
    const videoId = await getRepository(Video).findOne(id);
    console.log(videoId);
    if (videoId) {
      getRepository(Video).merge(videoId, body);
      const result = await getRepository(Video).save(videoId);
      console.log(result);
      return result;
    }
    return {msg: 'Video no encontrado'};
  } */

  async updateVideoId(id, body){
    const result = await getConnection()
                        .createQueryBuilder()
                        .update(Video)
                        .set({url: body.url})
                        .where("id = :id", { id})
                        .execute();
    return result;
  }
}
