import { Module } from '@nestjs/common';
import { apiTextosService } from './apiTextos.service';
import { TextosController } from './apiTextos.controller';
import { UsersModule } from '../db/users/users.module';
import { TextosModule } from '../db/textos/textos.module';
@Module({
  imports: [UsersModule, TextosModule],
  controllers: [TextosController],
  providers: [apiTextosService],
})
export class ApiTextosModule {}