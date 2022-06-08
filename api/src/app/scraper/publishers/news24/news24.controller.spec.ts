import { Test, TestingModule } from '@nestjs/testing';
import { News24Controller } from './news24.controller';

describe('News24Controller', () => {
  let controller: News24Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [News24Controller],
    }).compile();

    controller = module.get<News24Controller>(News24Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
