import { Test, TestingModule } from '@nestjs/testing';
import { OptionTypesController } from './option_types.controller';
import { OptionTypesService } from './option_types.service';

describe('OptionTypesController', () => {
  let controller: OptionTypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OptionTypesController],
      providers: [OptionTypesService],
    }).compile();

    controller = module.get<OptionTypesController>(OptionTypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
