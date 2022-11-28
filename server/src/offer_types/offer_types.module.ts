import { Module } from '@nestjs/common';
import { OfferTypesService } from './offer_types.service';
import { OfferTypesController } from './offer_types.controller';

@Module({
  controllers: [OfferTypesController],
  providers: [OfferTypesService]
})
export class OfferTypesModule {}
