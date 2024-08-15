import {
  IsNotEmpty,
  IsEmail,
  IsPhoneNumber,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateUserDto {
  @MaxLength(255)
  @IsNotEmpty()
  @IsString()
  name: string;

  @MaxLength(255)
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @MaxLength(255)
  @IsPhoneNumber()
  @IsNotEmpty()
  phone: string;
}
