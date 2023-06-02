import { Test, TestingModule } from '@nestjs/testing';
import { Teacher4Service } from './teacher4.service';

describe('Teacher4Service', () => {
  let service: Teacher4Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Teacher4Service],
    }).compile();

    service = module.get<Teacher4Service>(Teacher4Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
