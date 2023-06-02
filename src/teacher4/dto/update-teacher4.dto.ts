import { PartialType } from '@nestjs/mapped-types';
import { CreateTeacher4Dto } from './create-teacher4.dto';

export class UpdateTeacher4Dto extends PartialType(CreateTeacher4Dto) {}
