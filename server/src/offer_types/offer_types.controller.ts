import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { OfferTypesService } from './offer_types.service';
import { CreateOfferTypeDto } from './dto/create-offer_type.dto';
import { UpdateOfferTypeDto } from './dto/update-offer_type.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('offer-types')
@ApiTags('offer-types')
export class OfferTypesController {
  constructor(private readonly offerTypesService: OfferTypesService) {}

  @Post()
  create(@Body() createOfferTypeDto: CreateOfferTypeDto) {
    return this.offerTypesService.create(createOfferTypeDto);
  }

  @Get()
  findAll() {
    return this.offerTypesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.offerTypesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateOfferTypeDto: UpdateOfferTypeDto,
  ) {
    return this.offerTypesService.update(+id, updateOfferTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.offerTypesService.remove(+id);
  }
}
