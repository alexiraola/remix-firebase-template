import compression from "compression";
import express from "express";
import morgan from "morgan";
import { firestore } from "./firebase";

const app = express();

app.use(compression());
app.use(morgan("tiny"));
app.use(express.static("build/app/client", { maxAge: "1h" }));

app.disable("x-powered-by");

app.get("/test", async (_req, res) => {
  const data = await firestore.collection('test-collection').get();
  res.send(data.docs.map(d => d.data()));
});

export default app;
