import { Controller, Get, Param, UseGuards, Request, Query } from '@nestjs/common';
import { ApiVideosService } from './apivideos.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('api/videos')
export class ApiVideosController {
  constructor(private readonly videosService: ApiVideosService) {}

  @UseGuards(new JwtAuthGuard())
  @Get()
  findAll(@Request() req, @Query() query) {
      return this.videosService.findAll(parseInt(req.user.user), query.type);
  }

  @UseGuards(new JwtAuthGuard())
  @Get(':video')
  findOne(@Param('video') id: string, @Request() req) {
    return this.videosService.getOneVideo(
      parseInt(id),
      parseInt(req.user.user),
    );
  }
}
