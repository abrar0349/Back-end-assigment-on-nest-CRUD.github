import { Test, TestingModule } from '@nestjs/testing';
import { Teacher7Controller } from './teacher7.controller';
import { Teacher7Service } from './teacher7.service';

describe('Teacher7Controller', () => {
  let controller: Teacher7Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Teacher7Controller],
      providers: [Teacher7Service],
    }).compile();

    controller = module.get<Teacher7Controller>(Teacher7Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
