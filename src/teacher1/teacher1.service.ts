import { Injectable } from '@nestjs/common';
import { CreateTeacher1Dto } from './dto/create-teacher1.dto';
import { UpdateTeacher1Dto } from './dto/update-teacher1.dto';

@Injectable()
export class Teacher1Service {
  create(createTeacher1Dto: CreateTeacher1Dto) {
    return 'This action adds a new teacher1';
  }

  findAll() {
    return `This action returns all teacher1`;
  }

  findOne(id: number) {
    return `This action returns a #${id} teacher1`;
  }

  update(id: number, updateTeacher1Dto: UpdateTeacher1Dto) {
    return `This action updates a #${id} teacher1`;
  }

  remove(id: number) {
    return `This action removes a #${id} teacher1`;
  }
}
