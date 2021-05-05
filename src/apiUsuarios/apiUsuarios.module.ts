import { Module } from '@nestjs/common';
import { apiUsuariosService } from './apiUsuarios.service';
import { apiUsuariosController } from './apiUsuarios.controller';
import { UsersModule } from '../db/users/users.module';

@Module({
  imports: [UsersModule],
  controllers: [apiUsuariosController],
  providers: [apiUsuariosService],
})
export class ApiUsuariosModule {}