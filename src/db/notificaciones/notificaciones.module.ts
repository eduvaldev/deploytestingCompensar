import { Module } from '@nestjs/common';
import { NotificacionesService } from './notificaciones.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Notificaciones } from './entities/notificaciones.entity';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forFeature([Notificaciones]),
  ],
  providers: [NotificacionesService],
  exports: [NotificacionesService],
})
export class NotificacionesModule {}
