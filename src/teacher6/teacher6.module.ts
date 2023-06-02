import { Module } from '@nestjs/common';
import { Teacher6Service } from './teacher6.service';
import { Teacher6Controller } from './teacher6.controller';

@Module({
  controllers: [Teacher6Controller],
  providers: [Teacher6Service]
})
export class Teacher6Module {}
