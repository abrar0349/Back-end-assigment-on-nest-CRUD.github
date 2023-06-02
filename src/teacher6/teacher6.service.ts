import { Injectable } from '@nestjs/common';
import { CreateTeacher6Dto } from './dto/create-teacher6.dto';
import { UpdateTeacher6Dto } from './dto/update-teacher6.dto';

@Injectable()
export class Teacher6Service {
  create(createTeacher6Dto: CreateTeacher6Dto) {
    return 'This action adds a new teacher6';
  }

  findAll() {
    return `This action returns all teacher6`;
  }

  findOne(id: number) {
    return `This action returns a #${id} teacher6`;
  }

  update(id: number, updateTeacher6Dto: UpdateTeacher6Dto) {
    return `This action updates a #${id} teacher6`;
  }

  remove(id: number) {
    return `This action removes a #${id} teacher6`;
  }
}
