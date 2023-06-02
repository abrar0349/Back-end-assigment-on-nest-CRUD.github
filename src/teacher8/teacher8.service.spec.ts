import { Test, TestingModule } from '@nestjs/testing';
import { Teacher8Service } from './teacher8.service';

describe('Teacher8Service', () => {
  let service: Teacher8Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Teacher8Service],
    }).compile();

    service = module.get<Teacher8Service>(Teacher8Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
