import express from "express";

const {PORT = 3000} = process.env;

const app = express();

if (!module.parent) {
  app
    .get("/", (req, res) => {
      res.send("Hello World!");
    })
    .listen(PORT)
    .on("listening", () => {
      console.log(`app is running on ${PORT} port`);
    });
}
