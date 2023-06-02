import { Test, TestingModule } from '@nestjs/testing';
import { Teacher10Service } from './teacher10.service';

describe('Teacher10Service', () => {
  let service: Teacher10Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Teacher10Service],
    }).compile();

    service = module.get<Teacher10Service>(Teacher10Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
