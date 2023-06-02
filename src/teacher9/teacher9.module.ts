import { Module } from '@nestjs/common';
import { Teacher9Service } from './teacher9.service';
import { Teacher9Controller } from './teacher9.controller';

@Module({
  controllers: [Teacher9Controller],
  providers: [Teacher9Service]
})
export class Teacher9Module {}
