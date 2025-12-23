import { ApiProperty } from '@nestjs/swagger';

export class AuthResponse {
  @ApiProperty({
    name: 'accessToken',
    description: 'Возвращает токен пользователя',
    example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
  })
  accessToken: string;
}
