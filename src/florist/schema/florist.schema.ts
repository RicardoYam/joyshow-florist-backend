import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Type } from 'src/type/schema/type.schema';

export type FloristDocument = HydratedDocument<Florist>;

@Schema()
export class Florist {
  @Prop()
  name: string;

  @Prop()
  size: 'small' | 'medium' | 'large';

  @Prop()
  price: number;

  @Prop()
  description: string;

  @Prop()
  image: string;

  @Prop({ type: [mongoose.Schema.Types.ObjectId], ref: 'Type' })
  type: Type[];
}

export const FloristSchema = SchemaFactory.createForClass(Florist);
