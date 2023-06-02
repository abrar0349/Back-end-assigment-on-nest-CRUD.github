import { Test, TestingModule } from '@nestjs/testing';
import { Teacher6Service } from './teacher6.service';

describe('Teacher6Service', () => {
  let service: Teacher6Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Teacher6Service],
    }).compile();

    service = module.get<Teacher6Service>(Teacher6Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
