import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World! This is the server.");
});

export { app };
