import { Module } from '@nestjs/common';
import { Teacher10Service } from './teacher10.service';
import { Teacher10Controller } from './teacher10.controller';

@Module({
  controllers: [Teacher10Controller],
  providers: [Teacher10Service]
})
export class Teacher10Module {}
