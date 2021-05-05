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
import { apiTextosService } from './apiTextos.service';

@Controller('api/textos')
export class TextosController {
  constructor(
    private readonly ApiTextosService: apiTextosService,
  ) {}

  @Get()
  getAllTextos(){
    return this.ApiTextosService.findAllText();
  }

  @Get(':id')
  getTextoId(@Param('id') id){
    return this.ApiTextosService.findTextId(id);
  }

  @Post(':id')
  updateTextoId(@Body() data, @Param('id') id ){
    return this.ApiTextosService.updateTextId(id, data);
  }
}
