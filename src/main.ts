import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const origin = '*';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 启用 CORS
  app.enableCors({
    origin, // 允许的源，可以使用数组形式，允许多个源
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // 允许的方法
    credentials: true, // 是否允许发送凭证，如Cookies等
  });
  await app.listen(3002);
}
bootstrap();
