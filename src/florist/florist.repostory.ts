import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Florist, FloristDocument } from './schema/florist.schema';
import { CreateFloristDto } from './dto/create-florist.dto';
import { UpdateFloristDto } from './dto/update-florist.dto';

@Injectable()
export class FloristRepository {
  constructor(
    @InjectModel(Florist.name) private floristModel: Model<FloristDocument>,
  ) {}

  async create(createFloristDto: CreateFloristDto): Promise<Florist> {
    const createdFlorist = new this.floristModel(createFloristDto);
    return createdFlorist.save();
  }

  async findAll(): Promise<Florist[]> {
    return this.floristModel.find();
  }
  async findOne(id: string): Promise<Florist | null> {
    return this.floristModel.findById(id);
  }

  async update(
    id: string,
    updateFloristDto: UpdateFloristDto,
  ): Promise<Florist | null> {
    return this.floristModel.findByIdAndUpdate(id, updateFloristDto, {
      new: true,
    });
  }

  async remove(id: string): Promise<Florist | null> {
    return this.floristModel.findByIdAndDelete(id).exec();
  }
}
