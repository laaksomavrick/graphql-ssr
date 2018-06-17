import { 
    Controller, 
    Get,
    Post,
    Put,
    Delete,
    Param,
    Body, 
    Req 
} from '@nestjs/common';
import { BlogPost } from './posts.entity';
import { PostsService } from './posts.service';
@Controller('posts')
export class PostsController {
    constructor(private readonly postsService: PostsService) {}

    @Post()
    async create(@Body() createPostDto): Promise<any> {
        return {};
    }

    @Get()
    async findAll(@Req() request): Promise<BlogPost[]> {
        return await this.postsService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id): Promise<any> {
        return {};
    }

    @Put(':id')
    async update(@Param('id') id, @Body() updatePostDto): Promise<any> {
        return {};
    }

    @Delete(':id')
    async remove(@Param('id') id): Promise<any> {
        return {};
    }

}