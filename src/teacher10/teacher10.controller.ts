import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Teacher10Service } from './teacher10.service';
import { CreateTeacher10Dto } from './dto/create-teacher10.dto';
import { UpdateTeacher10Dto } from './dto/update-teacher10.dto';

@Controller('teacher10')
export class Teacher10Controller {
  constructor(private readonly teacher10Service: Teacher10Service) {}

  @Post()
  create(@Body() createTeacher10Dto: CreateTeacher10Dto) {
    return this.teacher10Service.create(createTeacher10Dto);
  }

  @Get()
  findAll() {
    return this.teacher10Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.teacher10Service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTeacher10Dto: UpdateTeacher10Dto) {
    return this.teacher10Service.update(+id, updateTeacher10Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.teacher10Service.remove(+id);
  }
}
