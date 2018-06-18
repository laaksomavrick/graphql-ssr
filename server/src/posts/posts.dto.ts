import { IsString } from 'class-validator'

export class CreateBlogPostDto {
    @IsString()
    readonly title: string;

    @IsString()
    readonly content: string;
}