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
import { PreguntaService } from './apipreguntas.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('api/pregunta')
export class PreguntasController {
  constructor(
    private readonly preguntaService: PreguntaService,
  ) {}

  @UseGuards(new JwtAuthGuard())
  @Get()
  getAllPreguntasType(@Request() req){
    return this.preguntaService.findAll(parseInt(req.user.user));
  }
}