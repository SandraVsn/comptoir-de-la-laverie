import { Test, TestingModule } from '@nestjs/testing';
import { OfferTypesController } from './offer_types.controller';
import { OfferTypesService } from './offer_types.service';

describe('OfferTypesController', () => {
  let controller: OfferTypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OfferTypesController],
      providers: [OfferTypesService],
    }).compile();

    controller = module.get<OfferTypesController>(OfferTypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
