import { Query, Resolver, ResolveProperty } from '@nestjs/graphql';
import { PostService } from './post.service';

@Resolver('Post')
export class PostResolver {
    constructor(
        private readonly postService: PostService
    ){}

    @Query('posts')
    async getPost(obj, args, context, info) {
       return await this.postService.findAll(); 
    }

}