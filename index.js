// This file is the custom server entry point.
// It's used to start the Next.js application and allows for greater hosting flexibility.

const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const hostname = 'localhost';
// Read the port from the environment variable, with a default fallback to 3000.
const port = parseInt(process.env.PORT, 10) || 3000;

// Create the Next.js app instance.
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      // Be sure to parse the URL to get the pathname and query.
      const parsedUrl = parse(req.url, true);
      
      // Let the Next.js request handler do its thing.
      await handle(req, res, parsedUrl);
    } catch (err) {
      console.error('Error occurred handling', req.url, err);
      res.statusCode = 500;
      res.end('internal server error');
    }
  })
    .once('error', (err) => {
      console.error(err);
      process.exit(1);
    })
    .listen(port, () => {
      console.log(`> Ready on http://${hostname}:${port}`);
    });
});
