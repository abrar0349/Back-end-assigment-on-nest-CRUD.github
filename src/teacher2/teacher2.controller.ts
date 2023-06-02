import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Teacher2Service } from './teacher2.service';
import { CreateTeacher2Dto } from './dto/create-teacher2.dto';
import { UpdateTeacher2Dto } from './dto/update-teacher2.dto';

@Controller('teacher2')
export class Teacher2Controller {
  constructor(private readonly teacher2Service: Teacher2Service) {}

  @Post()
  create(@Body() createTeacher2Dto: CreateTeacher2Dto) {
    return this.teacher2Service.create(createTeacher2Dto);
  }

  @Get()
  findAll() {
    return this.teacher2Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.teacher2Service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTeacher2Dto: UpdateTeacher2Dto) {
    return this.teacher2Service.update(+id, updateTeacher2Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.teacher2Service.remove(+id);
  }
}
