import { Injectable } from '@nestjs/common';
import { CreateTeacher3Dto } from './dto/create-teacher3.dto';
import { UpdateTeacher3Dto } from './dto/update-teacher3.dto';

@Injectable()
export class Teacher3Service {
  create(createTeacher3Dto: CreateTeacher3Dto) {
    return 'This action adds a new teacher3';
  }

  findAll() {
    return `This action returns all teacher3`;
  }

  findOne(id: number) {
    return `This action returns a #${id} teacher3`;
  }

  update(id: number, updateTeacher3Dto: UpdateTeacher3Dto) {
    return `This action updates a #${id} teacher3`;
  }

  remove(id: number) {
    return `This action removes a #${id} teacher3`;
  }
}
