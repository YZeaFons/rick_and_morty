
const usuarios = require('../utils/users')
const login = (req, res) => {
    let access = false
    const { email, password } = req.query
    const gettingIn = usuarios.filter(user => user.email === email)
    console.log(gettingIn);
    console.log(email, password);
    if (gettingIn[0]) {
        console.log(gettingIn[0]);
        if (gettingIn[0].password === password) {
            access = true
            res.status(200).json({ access })
        }
        else res.status(200).json({ access })
    } else res.status(200).json({ access })
}
module.exports = { login }