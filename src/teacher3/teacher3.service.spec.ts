import { Test, TestingModule } from '@nestjs/testing';
import { Teacher3Service } from './teacher3.service';

describe('Teacher3Service', () => {
  let service: Teacher3Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Teacher3Service],
    }).compile();

    service = module.get<Teacher3Service>(Teacher3Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
