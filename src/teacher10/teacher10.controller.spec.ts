import { Test, TestingModule } from '@nestjs/testing';
import { Teacher10Controller } from './teacher10.controller';
import { Teacher10Service } from './teacher10.service';

describe('Teacher10Controller', () => {
  let controller: Teacher10Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Teacher10Controller],
      providers: [Teacher10Service],
    }).compile();

    controller = module.get<Teacher10Controller>(Teacher10Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
