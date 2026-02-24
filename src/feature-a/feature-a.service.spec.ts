import { Test, TestingModule } from '@nestjs/testing';
import { FeatureAService } from './feature-a.service';

describe('FeatureAService', () => {
  let service: FeatureAService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FeatureAService],
    }).compile();

    service = module.get<FeatureAService>(FeatureAService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
