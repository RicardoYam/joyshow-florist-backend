import { PartialType } from '@nestjs/mapped-types';
import { CreateFloristDto } from './create-florist.dto';
import { IsString, IsNotEmpty, IsOptional } from 'class-validator';
export class UpdateFloristDto extends PartialType(CreateFloristDto) {
  @IsString()
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  name: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  size: string;
}
