import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Type, TypeDocument } from './schema/type.schema';
import { CreateTypeDto } from './dto/create-type.dto';
import { UpdateTypeDto } from './dto/update-type.dto';
import { UpdateFloristDto } from 'src/florist/dto/update-florist.dto';

@Injectable()
export class TypeRepository {
  constructor(@InjectModel(Type.name) private typeModel: Model<TypeDocument>) {}

  async create(createTypeDto: CreateTypeDto): Promise<Type> {
    const createdType = new this.typeModel(createTypeDto);
    return createdType.save();
  }

  async findAll(): Promise<Type[]> {
    return this.typeModel.find();
  }
  async findOne(id: string): Promise<Type | null> {
    return this.typeModel.findById(id);
  }

  //   async update(
  //     id: string,
  //     updateFloristDto: UpdateFloristDto,
  //   ): Promise<Type | null> {
  //     return this.typeModel.findByIdAndUpdate(id, updateTypeDto, {
  //       new: true,
  //     });
  //   }

  //   async remove(id: string): Promise<Florist | null> {
  //     return this.floristModel.findByIdAndDelete(id).exec();
  //   }
}
