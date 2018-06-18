import { 
    Controller, 
    Get,
    Post,
    Put,
    Delete,
    Param,
    Body, 
    Req, 
    UsePipes,
    ValidationPipe
} from '@nestjs/common';
import { CreateBlogPostDto } from './posts.dto';
import { BlogPost } from './posts.entity';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
    constructor(private readonly postsService: PostsService) {}

    @Post()
    @UsePipes(new ValidationPipe({ whitelist: true }))
    async create(@Body() createBlogPostDto: CreateBlogPostDto): Promise<BlogPost> {
        return await this.postsService.create(createBlogPostDto);
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