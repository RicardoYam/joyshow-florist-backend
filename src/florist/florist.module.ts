import { Module } from '@nestjs/common';
import { FloristService } from './florist.service';
import { FloristController } from './florist.controller';
import { FloristSchema } from './schema/florist.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Florist } from './schema/florist.schema';
import { FloristRepository } from './florist.repository';
import { ValidateTypeNamesPipe } from './pipe/validate-type-names.pipe';
import { TypeModule } from 'src/type/type.module';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: Florist.name, schema: FloristSchema }]),
    TypeModule,
  ],
  controllers: [FloristController],
  providers: [FloristService, FloristRepository, ValidateTypeNamesPipe],
})
export class FloristModule {}
