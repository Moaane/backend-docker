import { Injectable } from '@nestjs/common';
import { CreateFeatureADto } from './dto/create-feature-a.dto';
import { UpdateFeatureADto } from './dto/update-feature-a.dto';

@Injectable()
export class FeatureAService {
  create(createFeatureADto: CreateFeatureADto) {
    return 'This action adds a new featureA';
  }

  findAll() {
    return `This action returns all featureA`;
  }

  findOne(id: number) {
    return `This action returns a #${id} featureA`;
  }

  update(id: number, updateFeatureADto: UpdateFeatureADto) {
    return `This action updates a #${id} featureA`;
  }

  remove(id: number) {
    return `This action removes a #${id} featureA`;
  }
}
