import { Query, Resolver, ResolveProperty, Mutation } from '@nestjs/graphql';
import { PostService } from './post.service';

@Resolver('Post')
export class PostResolver {
    constructor(
        private readonly postService: PostService
    ){}

    @Query('posts')
    async getPosts(obj, args, context, info) {
       return await this.postService.findAll(); 
    }

    @Mutation()
    async createPost(_, { title, content}) {
        const data = { title, content }
        return await this.postService.create(data)
    }

}