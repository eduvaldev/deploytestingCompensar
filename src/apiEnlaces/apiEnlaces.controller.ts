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

  @Get()
  getAllTextos(){
    return this.ApiEnlacesService.findAll();
  }

  @Get(':id')
  getTextoId(@Param('id') id){
    return this.ApiEnlacesService.findOneId(id);
  }

  @Post(':id')
  updateTextoId(@Body() data, @Param('id') id ){
    return this.ApiEnlacesService.updateEnlacestId(id, data);
  }
}
