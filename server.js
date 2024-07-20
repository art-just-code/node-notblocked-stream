const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((req, res) => {
    let stream = fs.createReadStream(__dirname + "/img.webp");
    stream.pipe(res);
});

server.listen(3000);
