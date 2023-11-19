import React, { useState } from 'react';
import Validation from '../../validator/validation';

export default function Form(props) {

    // ----------------States--------------------------------------
    const [userData, setUserData] = useState({
        email: '',
        password: '',
    })
    const [errors, setError] = useState({
        email: '',
        password: '',
    })
    // ----------------Functions-------------------------------------
    const handleChange = event => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
        setError(Validation({
            ...userData,
            [event.target.name]: event.target.value
        }))
    }
    const handleSubmit = event => {
        event.preventDefault()
        props.login(userData)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Email: </label>
                <input
                    name='email'
                    type="text"
                    placeholder='Ingrese su email'
                    value={userData.email}
                    onChange={handleChange}
                />
                <p>{errors.email}</p>
                <br />

                <label>Password: </label>
                <input
                    name='password'
                    type="password"
                    placeholder='Ingrese su contraseña'
                    value={userData.password}
                    onChange={handleChange}
                />
                <p>{errors.password}</p>
                <hr />

                <button
                    type='submit'
                    disabled={errors.email || errors.password}
                >Enviar</button>
                <hr />

            </form>
        </div>
    );
}
