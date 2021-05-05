import {
  Controller,
  Query,
  Post,
  Body,
  UseGuards,
  Request,
  UseInterceptors,
  Get,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { apiRetosService } from './apireto.service';

@Controller('api/reto')
export class apiRetoController {
  constructor(
    private readonly apiRetoService: apiRetosService,
  ){}

  @UseGuards(new JwtAuthGuard())
  @Get()
  getAllRetosUser(@Request() req){
    return this.apiRetoService.findAll(parseInt(req.user.user));
  }
}
