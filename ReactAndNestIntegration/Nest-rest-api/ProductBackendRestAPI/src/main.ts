import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:3000', // Allow communication with React app running on port 3000
    credentials: true, // Allow sending cookies from the client to the server
  });
  await app.listen(8100);
}
bootstrap();
