let myFavorites = []

const postFav = (req, res) => {
    myFavorites.push(req.body)
    res.status(200).json(myFavorites)
}
const deleteFav = (req, res) => {
    const idChar = Number(req.params.id);
    myFavorites = myFavorites.filter(chars => chars.id !== idChar)
    res.status(200).json(myFavorites)
}
module.exports = { postFav, deleteFav }