import {
  Column,
  Entity,
  OneToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  JoinColumn,
} from 'typeorm';

@Entity('preguntas')
export class Pregunta {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text', nullable: true })
  pregunta: string;

  @Column({ type: 'text', nullable: true })
  respuesta: string;

  @Column({ type: 'text', nullable: true })
  textoHelp: string;

  @Column({ type: 'text', nullable: true })
  urlImg: string;

  @Column({ type: 'text', nullable: false })
  type: string;

  @Column({ type: 'float', nullable: false })
  progress: number;
}
