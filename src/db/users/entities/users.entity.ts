import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Rols } from '../../rols/entities/rols.entity';
import { States } from '../../states/entities/state.entity';
import { Likeuser } from '../../likeuservideos/entities/likeuser.entity';
import { Uservideo } from '../../uservideos/entities/uservideos.entity';

@Entity('users')
export class Users {
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

  @Column({ type: 'bigint', nullable: true })
  identification_number: number;

  @Column({ type: 'varchar', nullable: true })
  document_type: string;

  @Column({ type: 'text', nullable: true })
  password: string;

  @Column({ type: 'timestamp', nullable: true })
  created_at: Date;

  @Column({ type: 'timestamp', nullable: true })
  updated_at: Date;

  @ManyToOne(() => States, (state) => state.id)
  @JoinColumn({ name: 'state_id' })
  state_id: States;

  @ManyToOne(() => Rols, (rol) => rol.id)
  @JoinColumn({ name: 'rol_id' })
  rol_id: Rols;
}
