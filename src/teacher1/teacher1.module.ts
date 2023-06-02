import { Module } from '@nestjs/common';
import { Teacher1Service } from './teacher1.service';
import { Teacher1Controller } from './teacher1.controller';

@Module({
  controllers: [Teacher1Controller],
  providers: [Teacher1Service]
})
export class Teacher1Module {}
