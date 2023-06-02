import { Test, TestingModule } from '@nestjs/testing';
import { Teacher1Service } from './teacher1.service';

describe('Teacher1Service', () => {
  let service: Teacher1Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Teacher1Service],
    }).compile();

    service = module.get<Teacher1Service>(Teacher1Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
