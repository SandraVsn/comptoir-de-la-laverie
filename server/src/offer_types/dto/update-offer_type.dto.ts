import { PartialType } from '@nestjs/swagger';
import { CreateOfferTypeDto } from './create-offer_type.dto';

export class UpdateOfferTypeDto extends PartialType(CreateOfferTypeDto) {}
