import { Module } from '@nestjs/common';
import { Teacher7Service } from './teacher7.service';
import { Teacher7Controller } from './teacher7.controller';

@Module({
  controllers: [Teacher7Controller],
  providers: [Teacher7Service]
})
export class Teacher7Module {}
