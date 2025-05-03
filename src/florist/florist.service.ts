import { Injectable } from '@nestjs/common';
import { FloristRepository } from './florist.repostory';
import { Florist } from './schema/florist.schema';
import { CreateFloristDto } from './dto/create-florist.dto';

@Injectable()
export class FloristService {
  constructor(private readonly floristRepository: FloristRepository) {}

  async create(createFloristDto: CreateFloristDto): Promise<Florist> {
    return this.floristRepository.create(createFloristDto);
  }

  async findAll(): Promise<Florist[]> {
    return this.floristRepository.findAll();
  }
}
