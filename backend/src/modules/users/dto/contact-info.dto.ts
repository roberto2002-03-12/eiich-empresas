import { IsString, IsNotEmpty, MaxLength } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreatePersonalInfoDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(45)
  readonly landLine: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(25)
  readonly phoneNumber: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(45)
  readonly lineOperator: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(105)
  readonly address: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(105)
  readonly reference: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(45)
  readonly department: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(45)
  readonly province: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(45)
  readonly district: string;
}

export class UpdatePersonalInfoDto extends PartialType(CreatePersonalInfoDto) {}
