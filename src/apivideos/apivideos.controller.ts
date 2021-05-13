import { 
  Controller, 
  Get, 
  Body,
  Param, 
  UseGuards, 
  Request, 
  Query, 
  Post 
} from '@nestjs/common';
import { ApiVideosService } from './apivideos.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('api/videos')
export class ApiVideosController {
  constructor(private readonly videosService: ApiVideosService) {}

  @Get('/admin')
  findAlllAdmin(){
    return this.videosService.finAllAdmin();
  }

  @Get('/admin/:video')
  findOneAdmin(@Param('video') id: number){
    return this.videosService.findOneAdmin(id);
  }
  
  @Post('/admin/:id')
  updateOneAdmin(@Body() data, @Param('id') id ){
    console.log(data);
    return this.videosService.updateVideoId(id, data);
  }

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
