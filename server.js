const http = require("http");
const port = 5000;
let queryData = "";

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World, Welcome to WeJapa Internships");

  if (req.method === "POST") {
    req.on("data", (data) => {
      queryData = data;
    });
    req.on("end", () => {
      let Myname = JSON.parse(queryData);
      return res.end(`Hello ${Myname}, Welcome to WeJapa Internships`);
    });
  }
});

server.listen(port, () => { console.log(`Server running on port ${port}`);});
