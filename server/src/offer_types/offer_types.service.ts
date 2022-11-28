import { Injectable } from '@nestjs/common';
import { CreateOfferTypeDto } from './dto/create-offer_type.dto';
import { UpdateOfferTypeDto } from './dto/update-offer_type.dto';

@Injectable()
export class OfferTypesService {
  create(createOfferTypeDto: CreateOfferTypeDto) {
    return 'This action adds a new offerType';
  }

  findAll() {
    return `This action returns all offerTypes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} offerType`;
  }

  update(id: number, updateOfferTypeDto: UpdateOfferTypeDto) {
    return `This action updates a #${id} offerType`;
  }

  remove(id: number) {
    return `This action removes a #${id} offerType`;
  }
}
