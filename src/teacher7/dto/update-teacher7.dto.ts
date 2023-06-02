import { PartialType } from '@nestjs/mapped-types';
import { CreateTeacher7Dto } from './create-teacher7.dto';

export class UpdateTeacher7Dto extends PartialType(CreateTeacher7Dto) {}
