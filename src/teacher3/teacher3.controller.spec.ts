import { Test, TestingModule } from '@nestjs/testing';
import { Teacher3Controller } from './teacher3.controller';
import { Teacher3Service } from './teacher3.service';

describe('Teacher3Controller', () => {
  let controller: Teacher3Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Teacher3Controller],
      providers: [Teacher3Service],
    }).compile();

    controller = module.get<Teacher3Controller>(Teacher3Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
