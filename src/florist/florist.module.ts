import { Module } from '@nestjs/common';
import { FloristService } from './florist.service';
import { FloristController } from './florist.controller';

@Module({
  controllers: [FloristController],
  providers: [FloristService],
})
export class FloristModule {}
