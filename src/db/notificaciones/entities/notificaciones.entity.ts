import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  JoinColumn,
} from 'typeorm';
import { Usernotificaciones } from '../../usernotificaciones/entities/usernotificaciones.entity';

@Entity('notificaciones')
export class Notificaciones {
  @OneToMany(() => Usernotificaciones, (usernotificacion) => usernotificacion.id, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn()
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text', nullable: true })
  icono: string;

  @Column({ type: 'text', nullable: false })
  type: string;

  @Column({ type: 'text', nullable: true })
  subtype: string;
}
