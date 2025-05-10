import { Module } from '@nestjs/common';
import { TypeService } from './type.service';
import { TypeController } from './type.controller';
import { TypeSchema } from './schema/type.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Type } from './schema/type.schema';
import { TypeRepository } from './type.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Type.name, schema: TypeSchema }]),
  ],
  controllers: [TypeController],
  providers: [TypeService, TypeRepository],
  exports: [MongooseModule],
})
export class TypeModule {}
