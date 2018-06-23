import { Module } from '@nestjs/common';
import { SsrController } from './ssr.controller';
import { SsrService } from './ssr.service';

@Module({
    providers: [SsrService],
    controllers: [SsrController]
})

export class SsrModule {}