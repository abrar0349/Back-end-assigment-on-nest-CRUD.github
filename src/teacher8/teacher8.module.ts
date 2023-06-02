import { Module } from '@nestjs/common';
import { Teacher8Service } from './teacher8.service';
import { Teacher8Controller } from './teacher8.controller';

@Module({
  controllers: [Teacher8Controller],
  providers: [Teacher8Service]
})
export class Teacher8Module {}
