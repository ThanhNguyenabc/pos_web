const { createServer } = require("http");
const { parse } = require("url");
const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const hostname = "127.0.0.1";
const port = 3000;
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();
    console.log(__dirname + "/public");
    server.use("/public", express.static(__dirname + "/public"));
    server.all("*", (req, res) => {
      return handle(req, res);
    });
    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });
    // createServer(async (req, res) => {
    //   try {
    //     await handle(req, res, parsedUrl);
    //   } catch (err) {
    //     console.error("Error occurred handling", req.url, err);
    //     res.statusCode = 500;
    //     res.end("internal server error");
    //   }
    // }).listen(port, (err) => {
    //   if (err) throw err;
    //   console.log(`> Ready on http://${hostname}:${port}`);
    // });
  })
  .catch((error) => {
    if (error) throw error;
  });
