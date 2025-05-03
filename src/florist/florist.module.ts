import { Module } from '@nestjs/common';
import { FloristService } from './florist.service';
import { FloristController } from './florist.controller';
import { FloristSchema } from './schema/florist.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Florist } from './schema/florist.schema';
import { FloristRepository } from './florist.repostory';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: Florist.name, schema: FloristSchema }]),
  ],
  controllers: [FloristController],
  providers: [FloristService, FloristRepository],
})
export class FloristModule {}
