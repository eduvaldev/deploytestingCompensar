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
import { Userpregunta } from '../../userpregunta/entities/userpregunta.entity';
import {Userselectreto} from '../../userselectreto/entities/userselecreto.entity';
import {Usernotificaciones} from '../../usernotificaciones/entities/usernotificaciones.entity';

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
  @OneToMany(() => Userpregunta, (userpregunta) => userpregunta.id, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @OneToMany(() => Userselectreto, (userselectreto) => userselectreto.id, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @OneToMany(() => Usernotificaciones, (usernotificacion) => usernotificacion.id, {
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
