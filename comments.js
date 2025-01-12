//create web server


var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');
var comments = [];

var server = http.createServer(function (req, res) {
    var parseUrl = url.parse(req.url, true);
    var pathName = parseUrl.pathname;
    if (pathName === '/') {
        fs.readFile('./index.html', function (err, data) {
            if (err) {
                console.log(err);
                res.end('404 Not Found');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } else if (pathName === '/comments') {
        if (req.method === 'GET') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(comments));
        } else if (req.method === 'POST') {
            var postData = '';
            req.on('data', function (chunk) {
                postData += chunk;
            });
            req.on('end', function () {
                var comment = qs.parse(postData);
                comments.push(comment);
                res.end(JSON.stringify(comment));
            });
        }
    } else {
        res.end('404 Not Found');
    }
});

server.listen(8080, function () {
    console.log('server is running...');
});
