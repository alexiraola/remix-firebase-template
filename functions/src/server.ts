import { createRequestHandler } from "@remix-run/express";
import app from './express.js';
import { ServerBuild } from "@remix-run/node";

const viteDevServer = await import("vite").then((vite) =>
  vite.createServer({
    server: { middlewareMode: true },
  })
);

const remixHandler = createRequestHandler({
  build: () => viteDevServer.ssrLoadModule("virtual:remix/server-build") as Promise<ServerBuild>
});

app.use(viteDevServer.middlewares);

app.use('/remix.data', remixHandler);
app.use('/remix', remixHandler);

const port = process.env.PORT || 3000;
app.listen(port, () =>
  console.log(`Express server listening at http://localhost:${port}`)
);
