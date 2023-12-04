const express = require('express')
const apiRouter = express.Router()
const getCharById = require('../controllers/getCharById')
const { login } = require('../controllers/login')
const { postFav, deleteFav } = require('../controllers/handleFavorites')

apiRouter.get('/character/:id', getCharById)
apiRouter.get('/login', login)
apiRouter.post('/fav', postFav)
apiRouter.delete('/fav/:id', deleteFav)


module.exports = apiRouter