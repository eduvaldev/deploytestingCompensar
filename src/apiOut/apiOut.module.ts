import { Module } from '@nestjs/common';
import { apiOutController } from './apiOut.controller';
@Module({
  imports: [],
  controllers: [apiOutController],
  providers: [],
})
export class ApiOutModule {}