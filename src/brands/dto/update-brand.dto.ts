import { Optional } from '@nestjs/common';
import { PartialType } from '@nestjs/mapped-types';
import { IsString, MinLength } from 'class-validator';
import { CreateBrandDto } from './create-brand.dto';

export class UpdateBrandDto extends PartialType(CreateBrandDto) {
  @IsString()
  @MinLength(1)
  @Optional()
  name?: string;

  @IsString()
  @Optional()
  id?: string;
}
