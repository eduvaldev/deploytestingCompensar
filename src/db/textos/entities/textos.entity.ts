import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn
} from 'typeorm';

@Entity('textos')
export  class Textos {
  
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', nullable: true })
  pagina: string;

  @Column({ type: 'varchar', nullable: true })
  texto: string;

  @Column({ type: 'varchar', nullable: true })
  type: string;
}
