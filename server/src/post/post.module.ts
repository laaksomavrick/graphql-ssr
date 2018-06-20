import { Module } from '@nestjs/common';
import { TagModule } from '../tag/tag.module';
import { PostService } from './post.service';
import { PostResolver } from './post.resolver';
import { Post } from './post.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        TypeOrmModule.forFeature([Post]),
        TagModule
    ],
    providers: [PostService, PostResolver]
})

export class PostModule {}