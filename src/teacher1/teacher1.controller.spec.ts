import { Test, TestingModule } from '@nestjs/testing';
import { Teacher1Controller } from './teacher1.controller';
import { Teacher1Service } from './teacher1.service';

describe('Teacher1Controller', () => {
  let controller: Teacher1Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Teacher1Controller],
      providers: [Teacher1Service],
    }).compile();

    controller = module.get<Teacher1Controller>(Teacher1Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
