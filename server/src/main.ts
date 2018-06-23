import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const path = require('path');
import { join } from 'path'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useStaticAssets(join(__dirname, '../../../client/build'), {
    index: false,
    redirect: false
  });
  await app.listen(3001);
}
bootstrap();
