import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Type, TypeDocument } from 'src/type/schema/type.schema';

@Injectable()
export class ValidateTypeNamesPipe implements PipeTransform {
  constructor(@InjectModel(Type.name) private typeModel: Model<TypeDocument>) {}

  async transform(value: any) {
    const typeNames = value.type;
    if (!Array.isArray(typeNames) || typeNames.length === 0) {
      throw new BadRequestException('Type names must be a non-empty array');
    }

    const foundTypes = await this.typeModel
      .find({ name: { $in: typeNames } })
      .exec();
    if (foundTypes.length !== typeNames.length) {
      throw new BadRequestException('One or more type names are invalid');
    }

    // Optionally, replace names with IDs for further processing
    value.type = foundTypes.map((t) => t._id);
    return value;
  }
}
