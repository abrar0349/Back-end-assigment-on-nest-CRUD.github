import { Test, TestingModule } from '@nestjs/testing';
import { Teacher4Controller } from './teacher4.controller';
import { Teacher4Service } from './teacher4.service';

describe('Teacher4Controller', () => {
  let controller: Teacher4Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Teacher4Controller],
      providers: [Teacher4Service],
    }).compile();

    controller = module.get<Teacher4Controller>(Teacher4Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
