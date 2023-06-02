import { PartialType } from '@nestjs/mapped-types';
import { CreateTeacher2Dto } from './create-teacher2.dto';

export class UpdateTeacher2Dto extends PartialType(CreateTeacher2Dto) {}
