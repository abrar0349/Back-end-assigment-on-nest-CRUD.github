import { PartialType } from '@nestjs/mapped-types';
import { CreateTeacher3Dto } from './create-teacher3.dto';

export class UpdateTeacher3Dto extends PartialType(CreateTeacher3Dto) {}
