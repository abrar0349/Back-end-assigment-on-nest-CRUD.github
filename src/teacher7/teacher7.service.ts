import { Injectable } from '@nestjs/common';
import { CreateTeacher7Dto } from './dto/create-teacher7.dto';
import { UpdateTeacher7Dto } from './dto/update-teacher7.dto';

@Injectable()
export class Teacher7Service {
  create(createTeacher7Dto: CreateTeacher7Dto) {
    return 'This action adds a new teacher7';
  }

  findAll() {
    return `This action returns all teacher7`;
  }

  findOne(id: number) {
    return `This action returns a #${id} teacher7`;
  }

  update(id: number, updateTeacher7Dto: UpdateTeacher7Dto) {
    return `This action updates a #${id} teacher7`;
  }

  remove(id: number) {
    return `This action removes a #${id} teacher7`;
  }
}
