import React, { useState } from 'react';


export default function Form() {

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

    }
    console.log(userData);




    return (
        <div>
            <form>
                <label>Email:</label>
                <input
                    name='email'
                    type="text"
                    placeholder='Ingrese su email'
                    onChange={handleChange}
                />
                <br />

                <label>Password:</label>
                <input
                    name='password'
                    type="text"
                    placeholder='Ingrese su contraseña'
                    onChange={handleChange}
                />
                <br />

                <button
                    type='submit'
                >Enviar</button>

            </form>
        </div>
    );
}
