import { Module } from '@nestjs/common';
import { RolsService } from './rols.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Rols } from './entities/rols.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Rols])],
  providers: [RolsService],
  exports: [RolsService],
})
export class RolsModule {}
