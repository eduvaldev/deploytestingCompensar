import { IsInt, IsString } from 'class-validator';

export class adminDto {
  @IsInt()
  id?: number;

  @IsString()
  TIPODOCUMENTO: string;

  @IsString()
  CONTRASENA: string;
}
