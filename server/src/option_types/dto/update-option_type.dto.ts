import { PartialType } from '@nestjs/swagger';
import { CreateOptionTypeDto } from './create-option_type.dto';

export class UpdateOptionTypeDto extends PartialType(CreateOptionTypeDto) {}
