import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Likeuser } from './entities/likeuser.entity';

@Injectable()
export class LikeuservideosService {
  constructor(
    @InjectRepository(Likeuser)
    private readonly likeuserRepository: Repository<Likeuser>,
  ) {}

  async findOneLikeUser(id: number, user: number) {
    const data = await this.likeuserRepository.findOne({
      where: [
        {
          video_id: id,
          user_id: user,
        },
      ],
      relations: ['video_id', 'user_id'],
    });
    if (data) return data;
    return null;
  }

  async create(data: any) {
    const create = this.likeuserRepository.create({ ...data });
    return await this.likeuserRepository.save(create);
  }

  async update(data: any) {
    const update = await this.likeuserRepository.update(data.id, {
      type: data.type,
    });
    return update;
    // return await this.likeuserRepository.save(update)
  }
}
