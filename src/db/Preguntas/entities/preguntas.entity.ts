import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  JoinColumn,
} from 'typeorm';
import { Userpregunta } from '../../userpregunta/entities/userpregunta.entity';

@Entity('pregunta')
export class Pregunta {
  @OneToMany(() => Userpregunta, (userpregunta) => userpregunta.id, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn()
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text', nullable: true })
  pregunta: string;

  @Column({ type: 'text', nullable: true })
  textoHelp: string;

  @Column({ type: 'text', nullable: true })
  urlImg: string;

  @Column({ type: 'text', nullable: false })
  type: string;
}
