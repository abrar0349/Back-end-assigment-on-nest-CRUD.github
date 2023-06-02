import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Teacher6Service } from './teacher6.service';
import { CreateTeacher6Dto } from './dto/create-teacher6.dto';
import { UpdateTeacher6Dto } from './dto/update-teacher6.dto';

@Controller('teacher6')
export class Teacher6Controller {
  constructor(private readonly teacher6Service: Teacher6Service) {}

  @Post()
  create(@Body() createTeacher6Dto: CreateTeacher6Dto) {
    return this.teacher6Service.create(createTeacher6Dto);
  }

  @Get()
  findAll() {
    return this.teacher6Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.teacher6Service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTeacher6Dto: UpdateTeacher6Dto) {
    return this.teacher6Service.update(+id, updateTeacher6Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.teacher6Service.remove(+id);
  }
}
