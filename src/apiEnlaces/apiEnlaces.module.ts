import { Module } from '@nestjs/common';
import { apiEnlacesService } from './apiEnlaces.service';
import { EnlacesController } from './apiEnlaces.controller';
import { EnlacesModule } from '../db/enlaces/enlaces.module';

@Module({
  imports: [EnlacesModule],
  controllers: [EnlacesController],
  providers: [apiEnlacesService],
})
export class ApiEnlacesModule {}