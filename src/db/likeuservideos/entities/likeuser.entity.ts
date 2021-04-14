import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  JoinColumn,
} from 'typeorm';
import { Users } from '../../users/entities/users.entity';
import { Video } from '../../videos/entities/videos.entity';

export enum LikeUserVideo {
  LIKE = 'like',
  DISLIKE = 'dislike',
}

@Entity('like_user_videos')
export class Likeuser {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Users, (user) => user.id)
  @JoinColumn({ name: 'user_id' })
  user_id: Users;

  @ManyToOne(() => Video, (video) => video.id)
  @JoinColumn({ name: 'video_id' })
  video_id: Video;

  @Column({ type: 'enum', enum: LikeUserVideo, default: LikeUserVideo.DISLIKE })
  type: LikeUserVideo;
}
