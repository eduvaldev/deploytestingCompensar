import { PartialType } from '@nestjs/mapped-types';
import { CreateApivideoDto } from './create-apivideo.dto';

export class UpdateApivideoDto extends PartialType(CreateApivideoDto) {}
