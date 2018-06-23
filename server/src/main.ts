import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const path = require('path');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const staticAssetsPath: string = path.resolve(__dirname + '../../../client/build');

  console.log(staticAssetsPath);

  app.useStaticAssets(path.resolve(__dirname + '../../../client/build'));

  await app.listen(3001);
}
bootstrap();
