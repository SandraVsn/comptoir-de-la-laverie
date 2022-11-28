import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { OptionTypesService } from './option_types.service';
import { CreateOptionTypeDto } from './dto/create-option_type.dto';
import { UpdateOptionTypeDto } from './dto/update-option_type.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('option-types')
@ApiTags('option-types')
export class OptionTypesController {
  constructor(private readonly optionTypesService: OptionTypesService) {}

  @Post()
  create(@Body() createOptionTypeDto: CreateOptionTypeDto) {
    return this.optionTypesService.create(createOptionTypeDto);
  }

  @Get()
  findAll() {
    return this.optionTypesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.optionTypesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateOptionTypeDto: UpdateOptionTypeDto,
  ) {
    return this.optionTypesService.update(+id, updateOptionTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.optionTypesService.remove(+id);
  }
}
