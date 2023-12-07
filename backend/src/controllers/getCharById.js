const axios = require('axios')
const URL2 = 'https://rickandmortyapi.com/api/character'
const URL = 'https://rym2.up.railway.app/api/character'
const API_KEY = 'henrystaff'

const getCharById = async (req, res) => {
    try {
        const idChar = Number(req.params.id);
        const { data } = await axios.get(`${URL2}/${idChar}`)
        const character = {
            id: data.id,
            status: data.status,
            name: data.name,
            species: data.species,
            origin: data.origin,
            image: data.image,
            gender: data.gender,
            location: data.location
        }
        return character.name
            ? res.status(200).json(character)
            : res.status(404).send('Not found')

    } catch (error) {
        return res.status(500).json(error.message)

    }
}

module.exports = getCharById


// ------ Este era mi código antes de EXPRESS -----------
// const axios = require('axios')
// const URL = 'https://rym2.up.railway.app/api/character'
// const API_KEY = 'henrystaff'

// const getCharById = (res, id) => {
//     axios.get(`${URL}/${id}?key=${API_KEY}`)
//         .then(resp => resp.data)
//         .then(data => {
//             const character = {
//                 id: data.id,
//                 name: data.name,
//                 gender: data.gender,
//                 specie: data.species,
//                 origin: data.origin,
//                 image: data.image,
//                 status: data.status,
//                 location: data.location
//             }
//             return res
//                 .writeHead(200, { 'Content-Type': 'application/json' })
//                 .end(JSON.stringify(character))
//         })
//         .catch(error => {
//             return res
//                 .writeHead(500, { 'Content-Type': 'application/json' })
//                 .end(JSON.stringify({ message: error.message }))
//         })


// }

// module.exports = getCharById