import { Injectable } from '@nestjs/common';
import { CreateFloristDto } from './dto/create-florist.dto';
import { UpdateFloristDto } from './dto/update-florist.dto';

@Injectable()
export class FloristService {
  create(createFloristDto: CreateFloristDto) {
    return 'This action adds a new florist';
  }

  findAll() {
    return `This action returns all florist`;
  }

  findOne(id: number) {
    return `This action returns a #${id} florist`;
  }

  update(id: number, updateFloristDto: UpdateFloristDto) {
    return `This action updates a #${id} florist`;
  }

  remove(id: number) {
    return `This action removes a #${id} florist`;
  }
}
