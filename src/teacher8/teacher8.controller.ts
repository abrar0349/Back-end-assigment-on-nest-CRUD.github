import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Teacher8Service } from './teacher8.service';
import { CreateTeacher8Dto } from './dto/create-teacher8.dto';
import { UpdateTeacher8Dto } from './dto/update-teacher8.dto';

@Controller('teacher8')
export class Teacher8Controller {
  constructor(private readonly teacher8Service: Teacher8Service) {}

  @Post()
  create(@Body() createTeacher8Dto: CreateTeacher8Dto) {
    return this.teacher8Service.create(createTeacher8Dto);
  }

  @Get()
  findAll() {
    return this.teacher8Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.teacher8Service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTeacher8Dto: UpdateTeacher8Dto) {
    return this.teacher8Service.update(+id, updateTeacher8Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.teacher8Service.remove(+id);
  }
}
