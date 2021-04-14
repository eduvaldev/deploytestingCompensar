import { IsDate, IsInt, IsString } from 'class-validator';

export class CreateUserDto {
  @IsInt()
  id?: number;

  @IsInt()
  identification_number: number;

  @IsString()
  document_type: string;

  @IsString()
  password: string;

  @IsDate()
  created_at?: Date;

  @IsDate()
  updated_at?: Date;

  @IsInt()
  state_id?: number;

  @IsInt()
  rol_id?: number;
}
