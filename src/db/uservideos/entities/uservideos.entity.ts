import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Users } from '../../users/entities/users.entity';
import { Video } from '../../videos/entities/videos.entity';

@Entity('user_videos')
export class Uservideo {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Users, (user) => user.id)
  @JoinColumn({ name: 'user_id' })
  user_id: Users[];

  @ManyToOne(() => Video, (video) => video.id)
  @JoinColumn({ name: 'video_id' })
  video_id: Video;

  @Column({ type: 'float', nullable: true })
  percentage: number;

  @Column({ type: 'varchar', nullable: true })
  stopped_at: string;
}
