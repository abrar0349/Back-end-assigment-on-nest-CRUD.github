import { Test, TestingModule } from '@nestjs/testing';
import { Teacher8Controller } from './teacher8.controller';
import { Teacher8Service } from './teacher8.service';

describe('Teacher8Controller', () => {
  let controller: Teacher8Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Teacher8Controller],
      providers: [Teacher8Service],
    }).compile();

    controller = module.get<Teacher8Controller>(Teacher8Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
