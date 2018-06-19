import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { Connection } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { graphqlExpress } from 'apollo-server-express';
import { GraphQLModule, GraphQLFactory } from '@nestjs/graphql';
import { PostModule } from './post/post.module';

@Module({
    imports: [
        TypeOrmModule.forRoot(),
        GraphQLModule,
        PostModule
    ],
    controllers: [],
    providers: []
})

export class AppModule implements NestModule {
    constructor(
      private readonly connection: Connection, 
      private readonly graphQLFactory: GraphQLFactory
    ) {}

    configure(consumer: MiddlewareConsumer) {
      const typeDefs = this.graphQLFactory.mergeTypesByPaths('./**/*.graphql');
      const schema = this.graphQLFactory.createSchema({ typeDefs })

      consumer
        .apply(graphqlExpress(req => ({ schema, rootValue: req })))
        .forRoutes('/graphql')
    }
}
