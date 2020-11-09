import { Test, TestingModule } from '@nestjs/testing';
import { PassesController } from './passes.controller';

describe('PassController', () => {
  let controller: PassesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PassesController],
    }).compile();

    controller = module.get<PassesController>(PassesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
