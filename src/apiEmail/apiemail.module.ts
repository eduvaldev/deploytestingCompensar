import { Module } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { join } from 'path';
import { EmailService } from './apiemail.service';
import { EmailController } from './apiemail.controller';
@Module({
  imports: [],
  controllers: [EmailController],
  providers: [EmailService],
})
export class ApiEmailModule {}