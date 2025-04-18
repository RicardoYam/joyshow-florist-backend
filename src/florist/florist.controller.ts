import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FloristService } from './florist.service';
import { CreateFloristDto } from './dto/create-florist.dto';
import { UpdateFloristDto } from './dto/update-florist.dto';

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

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.floristService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFloristDto: UpdateFloristDto) {
    return this.floristService.update(+id, updateFloristDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.floristService.remove(+id);
  }
}
