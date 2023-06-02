import { Module } from '@nestjs/common';
import { Teacher2Service } from './teacher2.service';
import { Teacher2Controller } from './teacher2.controller';

@Module({
  controllers: [Teacher2Controller],
  providers: [Teacher2Service]
})
export class Teacher2Module {}
