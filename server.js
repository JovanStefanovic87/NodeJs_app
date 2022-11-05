const http = require('http');
const fs = require('fs')

let accounts = [
    {
        name: "Jovan",
        job: 'developer'
    },
    {
        name: "Alen",
        job: 'maminko'
    },
    {
        name: 'mamica',
        job: 'be beautiful and loved'
    }
];

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, {'Content-Type' : 'text/html'});
        let rs = fs.createReadStream('index.html');
        rs.pipe(res)
    }else if (req.url === '/kontakt') {
        res.writeHead(200, {'Content-Type' : 'text/html'});
        let rs = fs.createReadStream('kontakt.html');
        rs.pipe(res)
    }else if (req.url === '/data') {
        res.writeHead(200, {'Content-Type' : 'application/json'});
        res.end(JSON.stringify(accounts))
    }
    if (req.url === '/main.css') {
        res.writeHead(200, {'Content-Type' : 'text/css'});
        let rs = fs.createReadStream('main.css')
        rs.pipe(res)
    }
})

server.listen(3000, () => {
    console.log('Listening to port 3000')
})