import {
  Controller,
  Post,
  Body,
  UseGuards,
  Request,
  UseInterceptors,
} from '@nestjs/common';
import { LikeuserService } from './apilikeuser.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('api/likeuser')
export class LikeuserController {
  constructor(private readonly likeuserService: LikeuserService) {}

  @UseGuards(new JwtAuthGuard())
  @Post()
  @UseInterceptors(FileInterceptor('type'))
  create(@Body() body, @Request() req) {
    return this.likeuserService.update(body, parseInt(req.user.user));
  }
}
