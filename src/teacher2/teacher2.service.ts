import { Injectable } from '@nestjs/common';
import { CreateTeacher2Dto } from './dto/create-teacher2.dto';
import { UpdateTeacher2Dto } from './dto/update-teacher2.dto';

@Injectable()
export class Teacher2Service {
  create(createTeacher2Dto: CreateTeacher2Dto) {
    return 'This action adds a new teacher2';
  }

  findAll() {
    return `This action returns all teacher2`;
  }

  findOne(id: number) {
    return `This action returns a #${id} teacher2`;
  }

  update(id: number, updateTeacher2Dto: UpdateTeacher2Dto) {
    return `This action updates a #${id} teacher2`;
  }

  remove(id: number) {
    return `This action removes a #${id} teacher2`;
  }
}
