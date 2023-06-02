import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Teacher1Module } from './teacher1/teacher1.module';
import { Teacher2Module } from './teacher2/teacher2.module';
import { Teacher3Module } from './teacher3/teacher3.module';
import { Teacher4Module } from './teacher4/teacher4.module';
import { Teacher6Module } from './teacher6/teacher6.module';
import { Teacher7Module } from './teacher7/teacher7.module';
import { Teacher8Module } from './teacher8/teacher8.module';
import { Teacher9Module } from './teacher9/teacher9.module';
import { Teacher10Module } from './teacher10/teacher10.module';

@Module({
  imports: [Teacher1Module, Teacher2Module, Teacher3Module, Teacher4Module, Teacher6Module, Teacher7Module, Teacher8Module, Teacher9Module, Teacher10Module],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
