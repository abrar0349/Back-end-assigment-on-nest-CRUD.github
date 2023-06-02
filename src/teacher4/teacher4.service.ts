import { Injectable } from '@nestjs/common';
import { CreateTeacher4Dto } from './dto/create-teacher4.dto';
import { UpdateTeacher4Dto } from './dto/update-teacher4.dto';

@Injectable()
export class Teacher4Service {
  create(createTeacher4Dto: CreateTeacher4Dto) {
    return 'This action adds a new teacher4';
  }

  findAll() {
    return `This action returns all teacher4`;
  }

  findOne(id: number) {
    return `This action returns a #${id} teacher4`;
  }

  update(id: number, updateTeacher4Dto: UpdateTeacher4Dto) {
    return `This action updates a #${id} teacher4`;
  }

  remove(id: number) {
    return `This action removes a #${id} teacher4`;
  }
}
