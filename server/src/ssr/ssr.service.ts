import { Injectable, Inject } from '@nestjs/common';

const path = require('path');
const fs = require('fs');

@Injectable()
export class SsrService {

    async renderFullPage(html, preloadedState) {

        const filePath = path.resolve(__dirname, '..', '..', '..', 'client', 'build', 'index.html')

        const readFile = (path, opts = 'utf8') =>
            new Promise((res, rej) => {
                fs.readFile(path, opts, (err, data) => {
                    if (err) rej(err)
                    else res(data)
                })
            })

        const htmlData = await readFile(filePath);

        return htmlData.replace(
            '<div id="root"></div>',
            `
            <div id="root">${html}</div>
            <script>
                window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
            </script>
            `
        )
    }


}