import express from "express";
import { reactMiddleware } from "./middleware/react.middleware";
import { PUBLIC_DIR_PATH } from "./configuration";

// we split the express app definition in a module separated from the entry point because its easier to test.

export function createServer() {
  const server = express();

  server.use(
    express.static(PUBLIC_DIR_PATH, {
      index: false, // we don want the static middleware to serve index.html. The ssr content won't be serverd otherwise.
    })
  );

  server.use(/.*/, reactMiddleware());

  return server;
}
