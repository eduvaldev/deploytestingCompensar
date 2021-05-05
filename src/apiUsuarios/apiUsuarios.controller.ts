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
  Put,
} from '@nestjs/common';
import { apiUsuariosService } from './apiUsuarios.service';

@Controller('api/usuarios')
export class apiUsuariosController {
  constructor(
    private readonly ApiUsuariosService: apiUsuariosService,
  ) {}

  @Get()
  getAllUsers(){
    return this.ApiUsuariosService.findAll();
  }

  @Post()
  createOneUser(@Body() body){
    return this.ApiUsuariosService.createOne(body);
  }
}
