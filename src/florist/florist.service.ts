import { Injectable, NotFoundException } from '@nestjs/common';
import { FloristRepository } from './florist.repository';
import { Florist } from './schema/florist.schema';
import { CreateFloristDto } from './dto/create-florist.dto';
import { UpdateFloristDto } from './dto/update-florist.dto';

@Injectable()
export class FloristService {
  constructor(private readonly floristRepository: FloristRepository) {}

  async create(createFloristDto: CreateFloristDto): Promise<Florist> {
    return this.floristRepository.create(createFloristDto);
  }

  async findFloristById(id: string): Promise<Florist> {
    const florist = await this.floristRepository.findOne(id);
    if (!florist) {
      throw new NotFoundException('Florist not found');
    }
    return florist;
  }

  async findAll(): Promise<Florist[]> {
    return this.floristRepository.findAll();
  }

  async deleteFlorist(id: string): Promise<Florist> {
    const florist = await this.floristRepository.remove(id);
    if (!florist) {
      throw new NotFoundException('Florist not found');
    }
    return florist;
  }

  async updateFlorist(
    id: string,
    updateFloristDto: UpdateFloristDto,
  ): Promise<Florist> {
    const florist = await this.floristRepository.update(id, updateFloristDto);
    if (!florist) {
      throw new NotFoundException('Florist not found');
    }
    return florist;
  }
}
