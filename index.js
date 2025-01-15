const http = require('http');

console.log('STAGE');

const server = http.createServer((_, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello, world!\n');
});

server.listen(8000);

