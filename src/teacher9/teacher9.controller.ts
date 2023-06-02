import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Teacher9Service } from './teacher9.service';
import { CreateTeacher9Dto } from './dto/create-teacher9.dto';
import { UpdateTeacher9Dto } from './dto/update-teacher9.dto';

@Controller('teacher9')
export class Teacher9Controller {
  constructor(private readonly teacher9Service: Teacher9Service) {}

  @Post()
  create(@Body() createTeacher9Dto: CreateTeacher9Dto) {
    return this.teacher9Service.create(createTeacher9Dto);
  }

  @Get()
  findAll() {
    return this.teacher9Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.teacher9Service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTeacher9Dto: UpdateTeacher9Dto) {
    return this.teacher9Service.update(+id, updateTeacher9Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.teacher9Service.remove(+id);
  }
}
