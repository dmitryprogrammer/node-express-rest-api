import express from "express";
import bodyParser from "body-parser";
import {config} from "dotenv";

const {PORT = 3000} = process.env;

const app = express();

config();

if (require.main) {
  app
    .use(bodyParser())
    .get("/", (req, res) => {
      res.send("Hello World!");
    })
    .listen(PORT)
    .on("listening", () => {
      console.log(`app is running on ${PORT} port`);
    });
}
