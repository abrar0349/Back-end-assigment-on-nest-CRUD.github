import { PartialType } from '@nestjs/mapped-types';
import { CreateTeacher6Dto } from './create-teacher6.dto';

export class UpdateTeacher6Dto extends PartialType(CreateTeacher6Dto) {}
