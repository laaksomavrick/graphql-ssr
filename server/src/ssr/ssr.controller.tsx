import { Controller, Get, Req } from '@nestjs/common';
import { renderToString } from 'react-dom/server';
import * as React from 'react';
import { matchPath, StaticRouter } from 'react-router-dom';

import Routes from '../../../common/routes';
import { SsrService } from './ssr.service';
import App from '../../../client/src/components/App/App';

@Controller('')
export class SsrController {

    constructor(
        private readonly ssrService: SsrService
    ) {}

    @Get()
    async handle(@Req() request) {

        console.log("here2")

        const paths = Routes.map(obj => Object.values(obj)[0])

        const match = paths.reduce((acc, route) =>
            matchPath(request.url, { path: route, exact: true}) || acc, null);

        if (!match) {
            return 'Page not found';
        }

        const context = {}

        const html = renderToString(
            <StaticRouter context={context} location={request.url}>
                <App />
            </StaticRouter>
        );

        return await this.ssrService.renderFullPage(html, null);
        
    }
}