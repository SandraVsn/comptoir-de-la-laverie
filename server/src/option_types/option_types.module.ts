import { Module } from '@nestjs/common';
import { OptionTypesService } from './option_types.service';
import { OptionTypesController } from './option_types.controller';

@Module({
  controllers: [OptionTypesController],
  providers: [OptionTypesService]
})
export class OptionTypesModule {}
