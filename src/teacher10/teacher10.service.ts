import { Injectable } from '@nestjs/common';
import { CreateTeacher10Dto } from './dto/create-teacher10.dto';
import { UpdateTeacher10Dto } from './dto/update-teacher10.dto';

@Injectable()
export class Teacher10Service {
  create(createTeacher10Dto: CreateTeacher10Dto) {
    return 'This action adds a new teacher10';
  }

  findAll() {
    return `This action returns all teacher10`;
  }

  findOne(id: number) {
    return `This action returns a #${id} teacher10`;
  }

  update(id: number, updateTeacher10Dto: UpdateTeacher10Dto) {
    return `This action updates a #${id} teacher10`;
  }

  remove(id: number) {
    return `This action removes a #${id} teacher10`;
  }
}
