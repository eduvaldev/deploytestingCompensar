import { Module } from '@nestjs/common';
import { UservideosService } from './uservideos.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Uservideo } from './entities/uservideos.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Uservideo])],
  providers: [UservideosService],
  exports: [UservideosService],
})
export class UservideosModule {}
