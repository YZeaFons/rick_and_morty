const express = require('express')
const apiRouter = express.Router()
const getCharById = require('../controllers/getCharById')
const login = require('../controllers/login')
const deleteFav = require('../controllers/deleteFav')
const postFav = require('../controllers/postFav')
const postUser = require('../controllers/postUser')
// const { postFav, deleteFav } = require('../controllers/handleFavorites')

apiRouter.get('/character/:id', getCharById)

apiRouter.get('/login', login)
apiRouter.post('/login', postUser)
apiRouter.post('/fav', postFav)
apiRouter.delete('/fav/:id', deleteFav)


module.exports = apiRouter