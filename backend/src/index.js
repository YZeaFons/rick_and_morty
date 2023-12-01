var http = require("http");
var fs = require("fs");
// var data = require("./utils/data.js")
const getCharById = require("./controllers/getCharById.js");


const PORT = '3001'

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    switch (true) {
        case req.url.includes(`/rickandmorty/character`):
            let urlArr = req.url.split('/')
            let id = parseInt(urlArr.pop())
            // let char = data.filter((char) => char.id === id)[0]
            // res.writeHead(200, { 'Content-Type': 'application/json' })
            // res.end(JSON.stringify(char))
            getCharById(res, id)
            return

        default:
            res.writeHead(404, { 'ContentType': 'text/plain' })
            res.end('Route not found')
            return

    }
}).listen(PORT, '127.0.0.1')