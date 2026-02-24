import { Test, TestingModule } from '@nestjs/testing';
import { FeatureAController } from './feature-a.controller';
import { FeatureAService } from './feature-a.service';

describe('FeatureAController', () => {
  let controller: FeatureAController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FeatureAController],
      providers: [FeatureAService],
    }).compile();

    controller = module.get<FeatureAController>(FeatureAController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
