import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FloristService } from './florist.service';
import { CreateFloristDto } from './dto/create-florist.dto';

@Controller('florist')
export class FloristController {
  constructor(private readonly floristService: FloristService) {}

  @Post()
  create(@Body() createFloristDto: CreateFloristDto) {
    return this.floristService.create(createFloristDto);
  }

  @Get()
  findAll() {
    return this.floristService.findAll();
  }
}
