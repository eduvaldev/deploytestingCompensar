import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Uservideo } from './entities/uservideos.entity';

@Injectable()
export class UservideosService {
  constructor(
    @InjectRepository(Uservideo)
    private readonly userVideoRepository: Repository<Uservideo>,
  ) {}

  async findUserVideo(id: number, user: number) {
    const userVideo = await this.userVideoRepository.find({
      where: [
        {
          video_id: id,
          user_id: user,
        },
      ],
      relations: ['video_id'],
    });
    return userVideo[0];
  }

  async findUserVideoAll(user: number) {
    const userVideo = await this.userVideoRepository.find({
      where: 
      [
        {
          user_id: user,
        },
      ],
    });
    return userVideo;
  }

  async create(data: any) {
    const create = this.userVideoRepository.create({ ...data });
    return await this.userVideoRepository.save(create);
  }

  async update(data: any) {
    const { id, ...obj } = data;
    const result = this.userVideoRepository.update(id, obj);
    return result;
  }

  async findAllUserVideos(id: number) {
    const userVideo = await this.userVideoRepository.find({
      where: [
        {
          user_id: id,
        },
      ],
      relations: ['video_id'],
    });
    return userVideo;
  }
}
