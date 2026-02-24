import { PartialType } from '@nestjs/mapped-types';
import { CreateFeatureADto } from './create-feature-a.dto';

export class UpdateFeatureADto extends PartialType(CreateFeatureADto) {}
