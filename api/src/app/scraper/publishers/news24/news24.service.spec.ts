import { Test, TestingModule } from '@nestjs/testing';
import { News24Service } from './news24.service';

describe('News24Service', () => {
  let service: News24Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [News24Service],
    }).compile();

    service = module.get<News24Service>(News24Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
