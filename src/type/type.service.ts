import { Injectable } from '@nestjs/common';
import { CreateTypeDto } from './dto/create-type.dto';
import { UpdateTypeDto } from './dto/update-type.dto';
import { TypeRepository } from './type.repository';

@Injectable()
export class TypeService {
  constructor(private readonly typeRepository: TypeRepository) {}

  create(createTypeDto: CreateTypeDto) {
    return this.typeRepository.create(createTypeDto);
  }

  findAll() {
    return this.typeRepository.findAll();
  }

  findOne(id: string) {
    return this.typeRepository.findOne(id);
  }

  update(id: number, updateTypeDto: UpdateTypeDto) {
    return `This action updates a #${id} type`;
  }

  remove(id: number) {
    return `This action removes a #${id} type`;
  }
}
