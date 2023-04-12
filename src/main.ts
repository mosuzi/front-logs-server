import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: ['http://127.0.0.1:5500', 'http://localhost:8081'],
      credentials: true,
    },
  });
  await app.listen(3000);
}
bootstrap();
