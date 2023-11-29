var http = require("http");
var fs = require("fs");
var data = require("./utils/data.js")

const PORT = '3001'

http.createServer((req, res) => {
    console.log(`server creado en el puerto ${PORT}`);
    res.setHeader('Access-Control-Allow-Origin', '*');
    switch (true) {
        case req.url.includes(`/rickandmorty/character`):
            let urlArr = req.url.split('/')
            let id = parseInt(urlArr.pop())
            let char = data.filter((char) => char.id === id)[0]
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify(char))
            // fs.readFile("./utils/data.js",(err,data) => {
            //     if(err){

            //     }
            //  }
            // )
            return

        default:
            res.writeHead(404, { 'ContentType': 'text/plain' })
            res.end('Route not found')
            return

    }
}).listen(PORT, 'localhost')