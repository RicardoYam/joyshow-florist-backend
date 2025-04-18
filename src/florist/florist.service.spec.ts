import { Test, TestingModule } from '@nestjs/testing';
import { FloristService } from './florist.service';

describe('FloristService', () => {
  let service: FloristService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FloristService],
    }).compile();

    service = module.get<FloristService>(FloristService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
