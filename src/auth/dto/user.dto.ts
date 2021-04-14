import { IsInt, IsString } from 'class-validator';

export class LoginDto {
  @IsInt()
  id?: number;

  @IsString()
  TIPODOCUMENTO: string;

  @IsString()
  NUMERODOCUMENTO: string;

  @IsString()
  CONTRASENA: string;
}
