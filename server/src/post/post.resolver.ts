import { Query, Resolver, ResolveProperty, Mutation } from '@nestjs/graphql';
import { PostService } from './post.service';
import { TagService } from '../tag/tag.service';

@Resolver('Post')
export class PostResolver {
    constructor(
        private readonly postService: PostService,
        private readonly tagService: TagService
    ){}

    @Query('posts')
    async getPosts(obj, args, context, info) {
       return await this.postService.findAll(); 
    }

    @Query('post')
    async getPost(obj, args, context, info) {
        const { id } = args;
        return await this.postService.findOneById(id);
    }

    @Mutation()
    async createPost(_, { title, content}) {
        const data = { title, content }
        return await this.postService.create(data)
    }

    // TODO: createTag

    @ResolveProperty('tags')
    async getTags(post) {
        const { id } = post;
        return await this.tagService.findAll({ postId: id })
    }

}