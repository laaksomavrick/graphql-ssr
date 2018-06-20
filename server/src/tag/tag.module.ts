import { Module } from '@nestjs/common';
import { TagService } from './tag.service';
import { TagResolver } from './tag.resolver';
import { Tag } from './tag.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([Tag])],
    providers: [TagService, TagResolver],
    exports: [TagService]
})

export class TagModule {}