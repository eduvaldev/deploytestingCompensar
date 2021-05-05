import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  JoinColumn,
} from 'typeorm';
import {Userselectreto} from '../../userselectreto/entities/userselecreto.entity';

@Entity('selectreto')
export class Selectreto {
  @OneToMany(() => Userselectreto, (userselectreto) => userselectreto.id, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn()
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text', nullable: true })
  urlform: string;

  @Column({ type: 'text', nullable: false })
  type: string;

}
