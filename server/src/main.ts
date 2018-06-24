import _ from 'dotenv'
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path'
const cors = require('cors')

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const assetPath = join(__dirname, '../../client/build')

  app.useStaticAssets(assetPath, { 
    index: false,
    redirect: false
  });
  app.use(cors())
  await app.listen(process.env.NEST_PORT);
}
bootstrap();
