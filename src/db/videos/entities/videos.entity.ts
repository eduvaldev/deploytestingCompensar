import {
  Column,
  Entity,
  OneToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  JoinColumn,
} from 'typeorm';
import { States } from '../../states/entities/state.entity';
import { Likeuser } from '../../likeuservideos/entities/likeuser.entity';
import { Uservideo } from '../../uservideos/entities/uservideos.entity';

@Entity('videos')
export class Video {
  @OneToMany(() => Likeuser, (likeuser) => likeuser.id, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @OneToMany(() => Uservideo, (userVideo) => userVideo.id, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn()
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text', nullable: true })
  url: string;

  @Column({ type: 'text', nullable: true })
  title: string;

  @Column({ type: 'text', nullable: false })
  type: string;

  @Column({ type: 'varchar', nullable: true })
  duration: string;

  @ManyToOne(() => States, (state) => state.id)
  @JoinColumn({ name: 'state_id' })
  state_id: States;
}
