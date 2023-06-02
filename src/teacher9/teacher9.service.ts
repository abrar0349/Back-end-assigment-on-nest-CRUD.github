import { Injectable } from '@nestjs/common';
import { CreateTeacher9Dto } from './dto/create-teacher9.dto';
import { UpdateTeacher9Dto } from './dto/update-teacher9.dto';

@Injectable()
export class Teacher9Service {
  create(createTeacher9Dto: CreateTeacher9Dto) {
    return 'This action adds a new teacher9';
  }

  findAll() {
    return `This action returns all teacher9`;
  }

  findOne(id: number) {
    return `This action returns a #${id} teacher9`;
  }

  update(id: number, updateTeacher9Dto: UpdateTeacher9Dto) {
    return `This action updates a #${id} teacher9`;
  }

  remove(id: number) {
    return `This action removes a #${id} teacher9`;
  }
}
