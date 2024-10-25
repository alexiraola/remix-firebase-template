import { onRequest } from "firebase-functions/v2/https";
import express from "express";
import { createRequestHandler } from "@remix-run/express";

import app from './express';

const BUILD = "../build/app/server/index.js";

const remixHandler = createRequestHandler({
  build: () => import(BUILD),
});

// Vite fingerprints its assets so we can cache forever.
app.use(
  "/assets",
  express.static("../build/app/client/assets", { immutable: true, maxAge: "1y" })
);

app.get("/remix", remixHandler);

export const remixServer = onRequest(app);
