import { Test, TestingModule } from '@nestjs/testing';
import { Teacher6Controller } from './teacher6.controller';
import { Teacher6Service } from './teacher6.service';

describe('Teacher6Controller', () => {
  let controller: Teacher6Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Teacher6Controller],
      providers: [Teacher6Service],
    }).compile();

    controller = module.get<Teacher6Controller>(Teacher6Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
