import {Module} from '@nestjs/common';
import {EnlacesService} from './enlaces.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Enlaces} from './entities/enlaces.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Enlaces])],
  providers: [EnlacesService],
  exports: [EnlacesService]
})
export class EnlacesModule {}