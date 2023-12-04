const express = require('express')
const morgan = require('morgan')
const getCharById = require('./controllers/getCharById')
const apiRouter = require('./routes/routes.js')
const server = express()
const PORT = 3001


server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
        'Access-Control-Allow-Methods',
        'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
});
server.use(express.json())
server.use(morgan('dev'))
server.use('/rickandmorty', apiRouter)


server.get('/rickandmorty/character/:id', (req, res) => {
    // res.json(res.params)
    // console.log(req.params.id);
    // res.json(req.id)
    if (req.params.id) return getCharById(req, res)
    else res.status(500).json({ message: 'Error' })
})

server.listen(PORT)



// -----------------Este era mi servidor sin EXPRESS----------------
// var http = require("http");
// var fs = require("fs");
// // var data = require("./utils/data.js")
// const getCharById = require("./controllers/getCharById.js");


// const PORT = '3001'

// http.createServer((req, res) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     switch (true) {
//         case req.url.includes(`/rickandmorty/character`):
//             let urlArr = req.url.split('/')
//             let id = parseInt(urlArr.pop())
//             // let char = data.filter((char) => char.id === id)[0]
//             // res.writeHead(200, { 'Content-Type': 'application/json' })
//             // res.end(JSON.stringify(char))
//             getCharById(res, id)
//             return

//         default:
//             res.writeHead(404, { 'ContentType': 'text/plain' })
//             res.end('Route not found')
//             return

//     }
// }).listen(PORT, '127.0.0.1')