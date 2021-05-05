import { Module } from '@nestjs/common';
import { UserselectretoService } from './userselecreto.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Userselectreto } from './entities/userselecreto.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Userselectreto])],
  providers: [UserselectretoService],
  exports: [UserselectretoService],
})
export class UserSelectRetoModule {}