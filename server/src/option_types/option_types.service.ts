import { Injectable } from '@nestjs/common';
import { CreateOptionTypeDto } from './dto/create-option_type.dto';
import { UpdateOptionTypeDto } from './dto/update-option_type.dto';

@Injectable()
export class OptionTypesService {
  create(createOptionTypeDto: CreateOptionTypeDto) {
    return 'This action adds a new optionType';
  }

  findAll() {
    return `This action returns all optionTypes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} optionType`;
  }

  update(id: number, updateOptionTypeDto: UpdateOptionTypeDto) {
    return `This action updates a #${id} optionType`;
  }

  remove(id: number) {
    return `This action removes a #${id} optionType`;
  }
}
