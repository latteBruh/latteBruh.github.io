const port = 80;
let http = require('http');
let fs = require('fs');

const requestListener = function (req, res) {
    res.writeHead(200);
    fs.readFile('./index.html', null, function (error, data) {
        if (error) {
            res.writeHead(404);
            res.write('Whoops! File not found!');
        } else
            res.write(data);
        res.end();
    });
}
const server = http.createServer(requestListener);
server.listen(port,"0.0.0.0",console.log("Server hosted on port " + port));