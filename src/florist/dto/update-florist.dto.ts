import { PartialType } from '@nestjs/mapped-types';
import { CreateFloristDto } from './create-florist.dto';

export class UpdateFloristDto extends PartialType(CreateFloristDto) {}
