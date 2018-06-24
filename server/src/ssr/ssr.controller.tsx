// nest
import { Controller, Get, Req } from '@nestjs/common';

// react
import { renderToString } from 'react-dom/server';
import * as React from 'react';
import { matchPath, StaticRouter } from 'react-router-dom';

// apollo
import fetch from 'node-fetch';
import { ApolloProvider, getDataFromTree } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

// app
import Routes from '../../../common/routes';
import { SsrService } from './ssr.service';
import App from '../../../client/src/components/App/App';

// TODO clean up this file!!!!

@Controller('')
export class SsrController {

    constructor(
        private readonly ssrService: SsrService
    ) {}

    @Get()
    async handle(@Req() request) {

        const paths = Routes.map(obj => Object.values(obj)[0])

        const match = paths.reduce((acc, route) =>
            matchPath(request.url, { path: route, exact: true}) || acc, null);

        if (!match) {
            //TODO: better 404 OR redirect
            return 'Page not found';
        }

        const client = new ApolloClient({
            ssrMode: true,
            link: createHttpLink({
                fetch,
                uri: `http://${process.env.NEST_HOST}:${process.env.NEST_PORT}/graphql`,
                credentials: 'same-origin'
            }),
            cache: new InMemoryCache(),
        });

        const context = {}

        const AppProvider = (
            <ApolloProvider client={client}>
                <StaticRouter context={context} location={request.url}>
                    <App />
                </StaticRouter>
            </ApolloProvider>
        );

        await getDataFromTree(AppProvider);
        const initialState = client.extract();
        const html = renderToString(
            AppProvider
        );

        return await this.ssrService.renderFullPage(html, initialState);
        
    }
}