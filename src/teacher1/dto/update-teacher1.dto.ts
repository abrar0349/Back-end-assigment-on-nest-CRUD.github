import { PartialType } from '@nestjs/mapped-types';
import { CreateTeacher1Dto } from './create-teacher1.dto';

export class UpdateTeacher1Dto extends PartialType(CreateTeacher1Dto) {}
