import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Users } from '../../users/entities/users.entity';
import { Selectreto } from '../../Reto/entities/reto.entity';

@Entity('user_select_reto')
export class Userselectreto {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Users, (user) => user.id)
  @JoinColumn({ name: 'user_id' })
  user_id: Users[];

  @ManyToOne(() => Selectreto, (selectreto) => selectreto.id)
  @JoinColumn({ name: 'selectreto_id' })
  selectreto_id: Selectreto;

  @Column({ type: 'text', nullable: false })
  state: string;
}