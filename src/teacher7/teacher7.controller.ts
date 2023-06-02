import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Teacher7Service } from './teacher7.service';
import { CreateTeacher7Dto } from './dto/create-teacher7.dto';
import { UpdateTeacher7Dto } from './dto/update-teacher7.dto';

@Controller('teacher7')
export class Teacher7Controller {
  constructor(private readonly teacher7Service: Teacher7Service) {}

  @Post()
  create(@Body() createTeacher7Dto: CreateTeacher7Dto) {
    return this.teacher7Service.create(createTeacher7Dto);
  }

  @Get()
  findAll() {
    return this.teacher7Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.teacher7Service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTeacher7Dto: UpdateTeacher7Dto) {
    return this.teacher7Service.update(+id, updateTeacher7Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.teacher7Service.remove(+id);
  }
}
