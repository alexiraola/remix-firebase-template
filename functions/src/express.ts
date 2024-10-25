import compression from "compression";
import express from "express";
import morgan from "morgan";
import { firestore } from "./firebase.js";

const app = express();

app.use(compression());
app.use(morgan("tiny"));
app.use(express.static("build/app/client", { maxAge: "1h" }));

// http://expressjs.com/en/advanced/best-practice-security.html#at-a-minimum-disable-x-powered-by-header
app.disable("x-powered-by");

app.get("/ping", async (_req, res) => {
  const data = await firestore.collection('prueba').get();
  res.send(data.docs.map(d => d.data()));
});

export default app;
