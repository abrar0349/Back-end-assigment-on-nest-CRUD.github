import { Test, TestingModule } from '@nestjs/testing';
import { Teacher2Service } from './teacher2.service';

describe('Teacher2Service', () => {
  let service: Teacher2Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Teacher2Service],
    }).compile();

    service = module.get<Teacher2Service>(Teacher2Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
