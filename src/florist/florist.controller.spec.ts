import { Test, TestingModule } from '@nestjs/testing';
import { FloristController } from './florist.controller';
import { FloristService } from './florist.service';

describe('FloristController', () => {
  let controller: FloristController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FloristController],
      providers: [FloristService],
    }).compile();

    controller = module.get<FloristController>(FloristController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
