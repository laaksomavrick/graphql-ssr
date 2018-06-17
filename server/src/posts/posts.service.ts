import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BlogPost } from './posts.entity';

@Injectable()
export class PostsService {

    constructor(
        @InjectRepository(BlogPost)
        private readonly postRepository: Repository<BlogPost>
    ) {}

    async findAll(): Promise<BlogPost[]> {
        return await this.postRepository.find();
    }

}