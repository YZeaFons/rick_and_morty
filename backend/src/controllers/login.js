
// const users = require('../utils/users')
const { where } = require('sequelize')
const { User } = require('../DB_connection')

const login = async (req, res) => {
    try {
        const { email, password } = req.body
        if (email && password) {
            const currentUser = await User.findOne({ where: { email } })
            if (currentUser) {
                // const currentPassword = await User.findAll({ where: { email, password } })
                if (currentUser.password === password) {
                    return res.status(200).json({ access: true })
                }
                return res.status(403).send('Contraseña incorrecta')
            }
            return res.status(404).send('Usuario no encontrado')
        }
        return res.status(400).send('Faltan datos')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}
module.exports = login



// -----Este es mi codigo anterior -----------------
// const login = (req, res) => {
//     let access = false
//     const { email, password } = req.query
//     const gettingIn = usuarios.filter(user => user.email === email)
//     console.log(gettingIn);
//     console.log(email, password);
//     if (gettingIn[0]) {
//         console.log(gettingIn[0]);
//         if (gettingIn[0].password === password) {
//             access = true
//             res.status(200).json({ access })
//         }
//         else res.status(200).json({ access })
//     } else res.status(200).json({ access })
// }
// module.exports = { login }