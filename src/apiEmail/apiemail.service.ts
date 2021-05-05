import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailService {

  /* async sendMail() {
    await this.mailerService.sendMail({
      to: 'edudev.val@gmail.com',
      subject: "Aceptación del reto",
      template: 'reto',
    });
    const result = {
      message: 'Correo Enviado',
      code: 200,
    };
    return result;
  } */

  async sendMail(){
    const transporter = nodemailer.createTransport({
      host: "email-smtp.us-east-1.amazonaws.com",
      port: 587,
      secure: false, 
      auth: {
        user: 'AKIASMJ3QN3JQJUPAARL', 
        pass: 'BGo9iCfwp6vLkx2mx21KkBtUHpF73kUw2o+jDTEslAEb', 
      },
    });
    await transporter.sendMail({
      from: 'netgoucreativo@gmail.com', 
      to: "edudev.val@gmail.com", 
      subject: "Aceptación del reto",
      text: "Pueba correo compensar",
      html: "<b>Correo que se envio Ok</b>",
    });

    const result = {
      message: 'Correo Enviado',
      code: 200,
    };
    return result; 
  }

}