import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Teacher4Service } from './teacher4.service';
import { CreateTeacher4Dto } from './dto/create-teacher4.dto';
import { UpdateTeacher4Dto } from './dto/update-teacher4.dto';

@Controller('teacher4')
export class Teacher4Controller {
  constructor(private readonly teacher4Service: Teacher4Service) {}

  @Post()
  create(@Body() createTeacher4Dto: CreateTeacher4Dto) {
    return this.teacher4Service.create(createTeacher4Dto);
  }

  @Get()
  findAll() {
    return this.teacher4Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.teacher4Service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTeacher4Dto: UpdateTeacher4Dto) {
    return this.teacher4Service.update(+id, updateTeacher4Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.teacher4Service.remove(+id);
  }
}
