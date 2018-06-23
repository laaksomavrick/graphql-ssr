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
        
        return await readFile(filePath);

        /* return `
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
            <meta name="theme-color" content="#000000">
            <link rel="manifest" href="%PUBLIC_URL%/manifest.json">
            <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">
            <title>React App</title>
          </head>
          <body>
            <noscript>
              You need to enable JavaScript to run this app.
            </noscript>
            <div id="root">${html}</div>
            <script>
                window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
            </script>
          </body>
        </html>
       `*/ 
    }


}