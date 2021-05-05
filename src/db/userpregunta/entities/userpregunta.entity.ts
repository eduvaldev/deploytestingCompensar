import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Users } from '../../users/entities/users.entity';
import { Pregunta } from '../../Preguntas/entities/preguntas.entity';

@Entity('user_pregunta')
export class Userpregunta {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Users, (user) => user.id)
  @JoinColumn({ name: 'user_id' })
  user_id: Users[];

  @ManyToOne(() => Pregunta, (pregunta) => pregunta.id)
  @JoinColumn({ name: 'pregunta_id' })
  pregunta_id: Pregunta;

  @Column({ type: 'float', nullable: true })
  progreso: number;

  @Column({ type: 'text', nullable: true })
  respuesta: string;
}
