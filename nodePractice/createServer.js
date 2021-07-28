const http = require("http");
const fs = require("fs").promises;

http
  .createServer(async (req, res) => {
    try {
      const data = await fs.readFile("./html-ex/server2.html");
      res.writeHead(200, { "content-type": "text/html; charset=utf-8" });
      res.end(data);
    } catch (err) {
      console.error(err);
      res.writeHead(500, { "content-type": "text/plain; charset=utf-8" });
      res.end(err.message);
    }
  })
  .listen(4000, () => {
    console.log("4000포트로 얼른 들어오라 이말이야!!!");
  });
