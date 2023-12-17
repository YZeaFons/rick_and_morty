const { Favorite } = require('../DB_connection')

const postFav = async (req, res) => {
    try {
        const { name, origin, status, image, species, gender, location } = req.body
        if (name && origin && status && image && species && gender && location) {
            await Favorite.findOrCreate({ where: { name, origin, status, image, species, gender, location } })
            const allFavorites = await Favorite.findAll()
            return res.status(200).json(allFavorites)
        }
        return res.status(401).send('Faltan datos')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = postFav