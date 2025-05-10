import { PartialType } from '@nestjs/mapped-types';
import { CreateFloristDto } from './create-florist.dto';
import { IsString, IsNotEmpty, IsOptional, IsNumber } from 'class-validator';
export class UpdateFloristDto extends PartialType(CreateFloristDto) {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  name: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  size: string;

  @IsNumber()
  @IsNotEmpty()
  @IsOptional()
  price: number;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  description: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  image: string;
}
