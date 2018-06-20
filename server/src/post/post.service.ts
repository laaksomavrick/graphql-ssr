import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './post.entity';

@Injectable()
export class PostService {

    constructor(
        @InjectRepository(Post)
        private readonly postRepository: Repository<Post>
    ) {}

    async findAll(args = {}): Promise<Post[]> {
        return await this.postRepository.find(args);
    }

    async findOneById(id: number): Promise<Post> {
        return await this.postRepository.findOne({ id })
    }

    async create(data: Object): Promise<Post> {
        const post = await this.postRepository.create(data);
        return await this.postRepository.save(post);
    }

}