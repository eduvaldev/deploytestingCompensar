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
import { ApiNotificacionesService } from './apinotificaciones.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('api/notificaciones')
export class ApiNotificacionesController {
  constructor(
    private readonly apiNotificacionesService: ApiNotificacionesService,
  ) {}

  @UseGuards(new JwtAuthGuard())
  @Get()
  getAllPreguntasType(@Request() req){
    return this.apiNotificacionesService.findAll(parseInt(req.user.user));
  }
}