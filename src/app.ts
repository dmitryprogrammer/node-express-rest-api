import express from "express";
import bodyParser from "body-parser";
import {config} from "dotenv";

config();

const {PORT = 3000} = process.env;

const app = express();

if (require.main) {
  app
    .use(bodyParser())
    .get("/", (req, res) => {
      res.send("<h1>Hello World!</h1>");
    })
    .listen(PORT)
    .on("listening", () => {
      console.log(`app is running on ${PORT} port`);
    });
}
