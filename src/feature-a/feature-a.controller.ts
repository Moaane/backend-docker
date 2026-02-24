import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FeatureAService } from './feature-a.service';
import { CreateFeatureADto } from './dto/create-feature-a.dto';
import { UpdateFeatureADto } from './dto/update-feature-a.dto';

@Controller('feature-a')
export class FeatureAController {
  constructor(private readonly featureAService: FeatureAService) {}

  @Post()
  create(@Body() createFeatureADto: CreateFeatureADto) {
    return this.featureAService.create(createFeatureADto);
  }

  @Get()
  findAll() {
    return this.featureAService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.featureAService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFeatureADto: UpdateFeatureADto) {
    return this.featureAService.update(+id, updateFeatureADto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.featureAService.remove(+id);
  }
}
