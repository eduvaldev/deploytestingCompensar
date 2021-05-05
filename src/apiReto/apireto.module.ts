import { Module } from '@nestjs/common';
import { apiRetosService } from './apireto.service';
import { apiRetoController } from './apireto.controller';
import { UsersModule } from '../db/users/users.module';
import { UserSelectRetoModule } from '../db/userselectreto/userselecreto.module';
@Module({
  imports: [UsersModule, UserSelectRetoModule],
  controllers: [apiRetoController],
  providers: [apiRetosService],
})
export class ApiRetoModule {}