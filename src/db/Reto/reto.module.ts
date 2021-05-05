import { Module } from '@nestjs/common';
import { RetoService } from './reto.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Selectreto } from './entities/reto.entity';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forFeature([Selectreto]),
  ],
  providers: [RetoService],
  exports: [RetoService],
})
export class RetoModule {}
