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
import { CreateBlogPostDto } from './post.dto';
import { BlogPost } from './post.entity';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
    constructor(private readonly postService: PostService) {}

    @Post()
    @UsePipes(new ValidationPipe({ whitelist: true }))
    async create(@Body() createBlogPostDto: CreateBlogPostDto): Promise<BlogPost> {
        return await this.postService.create(createBlogPostDto);
    }

    @Get()
    async findAll(@Req() request): Promise<BlogPost[]> {
        return await this.postService.findAll();
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