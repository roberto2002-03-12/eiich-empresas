import { IsString, IsNotEmpty, IsIn, MaxLength } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreatePersonalInfoDto {
  @IsString()
  @IsNotEmpty()
  @IsIn(['DNI', 'Pasaporte', 'Carnet extranjeria'])
  readonly typeDocumentId: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(15)
  readonly documentNumber: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(65)
  readonly firstName: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(65)
  readonly fisrtLastName: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(65)
  readonly secondLastName: string;
}

export class UpdatePersonalInfoDto extends PartialType(CreatePersonalInfoDto) {}
