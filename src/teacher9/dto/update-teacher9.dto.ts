import { PartialType } from '@nestjs/mapped-types';
import { CreateTeacher9Dto } from './create-teacher9.dto';

export class UpdateTeacher9Dto extends PartialType(CreateTeacher9Dto) {}
