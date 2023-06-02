import { Test, TestingModule } from '@nestjs/testing';
import { Teacher7Service } from './teacher7.service';

describe('Teacher7Service', () => {
  let service: Teacher7Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Teacher7Service],
    }).compile();

    service = module.get<Teacher7Service>(Teacher7Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
