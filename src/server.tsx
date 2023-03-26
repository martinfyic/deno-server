import { serve } from 'https://deno.land/std@0.106.0/http/mod.ts';
import React from 'https://esm.sh/react@18.2.0';
import ReactDOMServer from 'https://esm.sh/react-dom@18.2.0/server';
import App from './App.tsx';

const PORT = 3000;

const server = serve({ port: PORT });
console.log(
	`=== 🚀 Server listening on 💻 http://localhost:${PORT}/ - ⌚ ${new Date().toLocaleString()} ===`
);

for await (const req of server) {
	req.respond({
		status: 200,
		headers: new Headers({
			'content-type': 'text/html; charset=UTF-8',
		}),
		body: `
        <!DOCTYPE html>
        <html>
          <head>
            <title>Deno Server</title>
          </head>
          <body style='background-color: black; color: white;'>
            <div id='app'>${ReactDOMServer.renderToString(<App />)}</div>
          </body>
        </html>
      `,
	});
}
