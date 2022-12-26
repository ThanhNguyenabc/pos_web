import { NestFactory } from '@nestjs/core';
import { AppModule } from 'app/app.module';
import { TransformInterceptor } from 'app/interceptors/transform.response';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new TransformInterceptor());
  await app.listen(3300);
}
bootstrap();
