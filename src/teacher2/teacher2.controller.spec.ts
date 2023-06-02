import { Test, TestingModule } from '@nestjs/testing';
import { Teacher2Controller } from './teacher2.controller';
import { Teacher2Service } from './teacher2.service';

describe('Teacher2Controller', () => {
  let controller: Teacher2Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Teacher2Controller],
      providers: [Teacher2Service],
    }).compile();

    controller = module.get<Teacher2Controller>(Teacher2Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
