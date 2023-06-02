import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Teacher3Service } from './teacher3.service';
import { CreateTeacher3Dto } from './dto/create-teacher3.dto';
import { UpdateTeacher3Dto } from './dto/update-teacher3.dto';

@Controller('teacher3')
export class Teacher3Controller {
  constructor(private readonly teacher3Service: Teacher3Service) {}

  @Post()
  create(@Body() createTeacher3Dto: CreateTeacher3Dto) {
    return this.teacher3Service.create(createTeacher3Dto);
  }

  @Get()
  findAll() {
    return this.teacher3Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.teacher3Service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTeacher3Dto: UpdateTeacher3Dto) {
    return this.teacher3Service.update(+id, updateTeacher3Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.teacher3Service.remove(+id);
  }
}
