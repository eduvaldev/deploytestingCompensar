import {
  Controller,
  Get,
  Body,
  UseGuards,
  Request,
  UseInterceptors,
} from '@nestjs/common';
import { EmailService } from './apiemail.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('api/emails')
export class EmailController {
  constructor(
    private readonly mailService: EmailService,
  ) {}
  
  @UseGuards(new JwtAuthGuard())
  @Get()
  sendEmail(){
    return this.mailService.sendMail()
  }
}