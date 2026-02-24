import { Module } from '@nestjs/common';
import { FeatureAService } from './feature-a.service';
import { FeatureAController } from './feature-a.controller';

@Module({
  controllers: [FeatureAController],
  providers: [FeatureAService],
})
export class FeatureAModule {}
