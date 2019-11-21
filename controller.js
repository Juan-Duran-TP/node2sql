const http = require('http');
const url = require('url');
const service = require('./service.js');

module.exports = http.createServer((req, res) => {
    const reqUrl = url.parse(req.url, true);
    res.setHeader("Access-Control-Allow-Origin","*");
    if (reqUrl.pathname == '/test' && req.method === 'GET') {
        console.log('Request Type:' +
            req.method + ' Endpoint: ' +
            reqUrl.pathname);
            service.calculatorRequest(req, res);
    }
    else {
        console.log('Request Type:' +
            req.method + ' Invalid Endpoint: ' +
            reqUrl.pathname);
            service.invalidRequest(req, res);
    }
});

