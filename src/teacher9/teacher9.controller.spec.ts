import { Test, TestingModule } from '@nestjs/testing';
import { Teacher9Controller } from './teacher9.controller';
import { Teacher9Service } from './teacher9.service';

describe('Teacher9Controller', () => {
  let controller: Teacher9Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Teacher9Controller],
      providers: [Teacher9Service],
    }).compile();

    controller = module.get<Teacher9Controller>(Teacher9Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
