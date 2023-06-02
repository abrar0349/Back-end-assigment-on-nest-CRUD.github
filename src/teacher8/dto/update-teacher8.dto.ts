import { PartialType } from '@nestjs/mapped-types';
import { CreateTeacher8Dto } from './create-teacher8.dto';

export class UpdateTeacher8Dto extends PartialType(CreateTeacher8Dto) {}
