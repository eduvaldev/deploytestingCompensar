import {
  Controller,
  Param,
  Query,
  Post,
  Body,
  UseGuards,
  Request,
  UseInterceptors,
  Get,
} from '@nestjs/common';
import { apiEnlacesService } from './apiEnlaces.service';

@Controller('api/enlaces')
export class EnlacesController {
  constructor(
    private readonly ApiEnlacesService: apiEnlacesService,
  ) {}

  @Get('/part')
  findAll(@Request() req, @Query() query) {
      return this.ApiEnlacesService.findAllType(query.type);
  }

  @Get()
  getAllEnlaces(){
    return this.ApiEnlacesService.findAll();
  }

  @Get(':id')
  getEnlaceId(@Param('id') id){
    return this.ApiEnlacesService.findOneId(id);
  }

  @Post(':id')
  updateEnlaceId(@Body() data, @Param('id') id ){
    return this.ApiEnlacesService.updateEnlacestId(id, data);
  }
}
