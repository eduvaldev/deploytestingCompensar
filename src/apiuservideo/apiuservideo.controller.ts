import {
  Controller,
  Post,
  Body,
  UseGuards,
  UseInterceptors,
  Request,
} from '@nestjs/common';
import { UservideoService } from './apiuservideo.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('api/uservideo')
export class UservideoController {
  constructor(private readonly uservideoService: UservideoService) {}

  @UseGuards(new JwtAuthGuard())
  @Post()
  @UseInterceptors(FileInterceptor('type'))
  create(@Body() body, @Request() req) {
    return this.uservideoService.update(body, parseInt(req.user.user));
  }
}
