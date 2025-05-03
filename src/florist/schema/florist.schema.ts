import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

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
}

export const FloristSchema = SchemaFactory.createForClass(Florist);
