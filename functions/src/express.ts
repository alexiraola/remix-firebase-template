import compression from "compression";
import express from "express";
import morgan from "morgan";

const app = express();

app.use(compression());
app.use(morgan("tiny"));
app.use(express.static("build/app/client", { maxAge: "1h" }));

// http://expressjs.com/en/advanced/best-practice-security.html#at-a-minimum-disable-x-powered-by-header
app.disable("x-powered-by");

app.get("/ping", (_req, res) => {
  res.send('Apa hi!');
});

export default app;
