import { Module } from '@nestjs/common';
import { Teacher4Service } from './teacher4.service';
import { Teacher4Controller } from './teacher4.controller';

@Module({
  controllers: [Teacher4Controller],
  providers: [Teacher4Service]
})
export class Teacher4Module {}
