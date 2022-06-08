import { Test, TestingModule } from '@nestjs/testing';
import { ProthomaloController } from './prothomalo.controller';

describe('ProthomaloController', () => {
  let controller: ProthomaloController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProthomaloController],
    }).compile();

    controller = module.get<ProthomaloController>(ProthomaloController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
