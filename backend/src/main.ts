import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'http://localhost:5173',
    credentials: true,
  });

  // Optional: use global prefix for routes like /api/*
  // app.setGlobalPrefix('api');

  await app.listen(3000);
}
bootstrap();
