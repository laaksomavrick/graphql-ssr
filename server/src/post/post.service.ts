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

    async findAll(): Promise<Post[]> {
        console.log("here");
        const results = await this.postRepository.find();
        console.log(results)
        return results
    }

    async create(data: Object): Promise<Post> {
        const post = await this.postRepository.create(data);
        return await this.postRepository.save(post);
    }

}