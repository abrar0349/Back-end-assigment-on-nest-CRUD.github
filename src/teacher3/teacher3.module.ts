import { Module } from '@nestjs/common';
import { Teacher3Service } from './teacher3.service';
import { Teacher3Controller } from './teacher3.controller';

@Module({
  controllers: [Teacher3Controller],
  providers: [Teacher3Service]
})
export class Teacher3Module {}
