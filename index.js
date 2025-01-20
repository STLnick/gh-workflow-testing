const http = require('http');

const server = http.createServer((_, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;"><h1>Welcome to Costco</h1><p>I love you.</p></div>\n');
});

// server.listen(8000);
server.listen(80);

