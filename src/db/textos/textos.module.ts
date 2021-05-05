import {Module} from '@nestjs/common';
import {TextosService} from './textos.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Textos} from './entities/textos.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Textos])],
  providers: [TextosService],
  exports: [TextosService]
})
export class TextosModule {}