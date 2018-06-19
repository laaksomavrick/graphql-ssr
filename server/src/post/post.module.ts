import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { PostResolver } from './post.resolver';
import { BlogPost } from './post.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([BlogPost])],
    controllers: [PostController],
    providers: [PostService, PostResolver]
})

export class PostModule {}