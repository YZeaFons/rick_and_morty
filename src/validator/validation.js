import React from 'react';
const regexEmail = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;

export default function Validation(props) {
    const errorsList = {};

    if (props.email === '') errorsList.email = 'El nombre de usuario no puede estar vacío'
    else if (!regexEmail.test(props.email)) errorsList.email = ('El correo ingresado no es valido')
    else if (props.email.length > 35) errorsList.email = 'El nombre de usuario no puede tener más de 35 caracteres'

    if (props.password === '') errorsList.password = 'La constraseña no puede estar vacía'
    else if (props.password.length < 6) errorsList.password = 'La contraseña debe tener al menos 6 caracteres'
    else if (props.password.length > 10) errorsList.password = 'La contraseña puede tener un máximo de 10 caracteres'
    return errorsList

}

// const prueba = {
//     email: 'kkjjjjjjjjjjjjjjjjjjjhkkk@gmail.com',
//     password: 'fghfghf'
// }
// console.log(Validation(prueba));