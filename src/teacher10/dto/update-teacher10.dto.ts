import { PartialType } from '@nestjs/mapped-types';
import { CreateTeacher10Dto } from './create-teacher10.dto';

export class UpdateTeacher10Dto extends PartialType(CreateTeacher10Dto) {}
