import { DocumentBuilder } from '@nestjs/swagger';

export function getSwaggetConfig() {
  return new DocumentBuilder()
    .setTitle('Auth API')
    .setDescription('Simple REST API service with auth logic')
    .setVersion('1.0.0')
    .addBearerAuth()
    .build();
}
