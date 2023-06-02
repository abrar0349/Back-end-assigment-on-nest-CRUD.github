import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Teacher1Service } from './teacher1.service';
import { CreateTeacher1Dto } from './dto/create-teacher1.dto';
import { UpdateTeacher1Dto } from './dto/update-teacher1.dto';

@Controller('teacher1')
export class Teacher1Controller {
  constructor(private readonly teacher1Service: Teacher1Service) {}

  @Post()
  create(@Body() createTeacher1Dto: CreateTeacher1Dto) {
    return this.teacher1Service.create(createTeacher1Dto);
  }

  @Get()
  findAll() {
    return this.teacher1Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.teacher1Service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTeacher1Dto: UpdateTeacher1Dto) {
    return this.teacher1Service.update(+id, updateTeacher1Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.teacher1Service.remove(+id);
  }
}
