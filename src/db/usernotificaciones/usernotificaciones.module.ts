import { Module } from '@nestjs/common';
import { UserNotifiacionesService } from './usernotificaciones.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usernotificaciones } from './entities/usernotificaciones.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Usernotificaciones])],
  providers: [UserNotifiacionesService],
  exports: [UserNotifiacionesService],
})
export class UserNotificacionesModule {}