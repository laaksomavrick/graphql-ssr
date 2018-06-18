import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BlogPost } from './posts.entity';
import { CreateBlogPostDto } from './posts.dto';

@Injectable()
export class PostsService {

    constructor(
        @InjectRepository(BlogPost)
        private readonly postRepository: Repository<BlogPost>
    ) {}

    async findAll(): Promise<BlogPost[]> {
        return await this.postRepository.find();
    }

    async create(createBlogPostDto: CreateBlogPostDto): Promise<BlogPost> {
        const blogPost = await this.postRepository.create(createBlogPostDto);
        return await this.postRepository.save(blogPost);
    }

}