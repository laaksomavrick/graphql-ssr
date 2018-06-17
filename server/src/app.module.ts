import { Module } from '@nestjs/common';
import { Connection } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [
      TypeOrmModule.forRoot(),
      PostsModule
  ],
  controllers: [],
  providers: []
})

export class AppModule {
    constructor(private readonly connection: Connection) {}
}
