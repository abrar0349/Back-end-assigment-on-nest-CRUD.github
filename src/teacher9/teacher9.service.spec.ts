import { Test, TestingModule } from '@nestjs/testing';
import { Teacher9Service } from './teacher9.service';

describe('Teacher9Service', () => {
  let service: Teacher9Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Teacher9Service],
    }).compile();

    service = module.get<Teacher9Service>(Teacher9Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
