import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FeatureAModule } from './feature-a/feature-a.module';

@Module({
  imports: [FeatureAModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
