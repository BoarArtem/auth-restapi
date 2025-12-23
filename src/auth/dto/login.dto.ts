/* eslint-disable @typescript-eslint/no-unsafe-call */
import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  IsEmail,
  MinLength,
  MaxLength,
} from 'class-validator';

export class LoginRequest {
  @ApiProperty({
    description: 'Почта пользователя',
    example: 'example@gmail.com',
  })
  @IsString({ message: 'Почта должно быть строкой' })
  @IsNotEmpty({ message: 'Почта обязательное для заполнения' })
  @IsEmail({}, { message: 'Некорректный формат электронной почты' })
  email: string;

  @ApiProperty({
    description: 'Пароль от аккаунта',
    example: '123456',
    minLength: 6,
    maxLength: 128,
  })
  @IsString({ message: 'Пароль должно быть строкой' })
  @IsNotEmpty({ message: 'Пароль обязательное для заполнения' })
  @MinLength(6, { message: 'Пароль должен содержать не менее 6 символов' })
  @MaxLength(128, { message: 'Пароль не содержать более 128 символов' })
  password: string;
}
