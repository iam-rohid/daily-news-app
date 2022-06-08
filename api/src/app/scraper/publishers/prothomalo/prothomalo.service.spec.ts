import { Test, TestingModule } from '@nestjs/testing';
import { ProthomaloService } from './prothomalo.service';

describe('ProthomaloService', () => {
  let service: ProthomaloService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProthomaloService],
    }).compile();

    service = module.get<ProthomaloService>(ProthomaloService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
