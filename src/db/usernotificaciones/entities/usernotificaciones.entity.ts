import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Users } from '../../users/entities/users.entity';
import { Notificaciones } from '../../notificaciones/entities/notificaciones.entity';

@Entity('user_notificaciones')
export class Usernotificaciones {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Users, (user) => user.id)
  @JoinColumn({ name: 'user_id' })
  user_id: Users[];

  @ManyToOne(() => Notificaciones, (notificacion) => notificacion.id)
  @JoinColumn({ name: 'notificaciones_id' })
  notificaciones_id: Notificaciones;

  @Column({ type: 'boolean', nullable: true })
  active: boolean;
}
