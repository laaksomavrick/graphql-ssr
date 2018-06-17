import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { BlogPost } from './posts.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([BlogPost])],
    controllers: [PostsController],
    providers: [PostsService]
})

export class PostsModule {}