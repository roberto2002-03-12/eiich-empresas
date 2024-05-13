import { IsString, IsNotEmpty, IsEmail, MinLength } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  readonly password: string;
}

export class CreateUserDtoLocal extends CreateUserDto {
  readonly createdBy: number;
  readonly updatedBy: number;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
