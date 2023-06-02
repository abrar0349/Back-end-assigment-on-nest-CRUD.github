import { Injectable } from '@nestjs/common';
import { CreateTeacher8Dto } from './dto/create-teacher8.dto';
import { UpdateTeacher8Dto } from './dto/update-teacher8.dto';

@Injectable()
export class Teacher8Service {
  create(createTeacher8Dto: CreateTeacher8Dto) {
    return 'This action adds a new teacher8';
  }

  findAll() {
    return `This action returns all teacher8`;
  }

  findOne(id: number) {
    return `This action returns a #${id} teacher8`;
  }

  update(id: number, updateTeacher8Dto: UpdateTeacher8Dto) {
    return `This action updates a #${id} teacher8`;
  }

  remove(id: number) {
    return `This action removes a #${id} teacher8`;
  }
}
