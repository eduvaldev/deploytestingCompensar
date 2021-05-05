import { Module } from '@nestjs/common';
import { ApiNotificacionesService } from './apinotificaciones.service';
import { ApiNotificacionesController } from './apinotificaciones.controller';
import { UsersModule } from '../db/users/users.module';
import { UserNotificacionesModule } from '../db/usernotificaciones/usernotificaciones.module';
@Module({
  imports: [UsersModule, UserNotificacionesModule],
  controllers: [ApiNotificacionesController],
  providers: [ApiNotificacionesService],
})
export class ApiNotificacionesModule {}