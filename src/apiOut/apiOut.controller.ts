import {
  Controller,
  Get,
  HttpCode,
} from '@nestjs/common';

@Controller('')
export class apiOutController {
  @Get()
  @HttpCode(200)
  sendEmail(){
    return 'Mensaje Ok'
  }
}