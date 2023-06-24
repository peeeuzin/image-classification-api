import { Test, TestingModule } from '@nestjs/testing';
import { LyaController } from './lya.controller';

describe('LyaController', () => {
  let controller: LyaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LyaController],
    }).compile();

    controller = module.get<LyaController>(LyaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
