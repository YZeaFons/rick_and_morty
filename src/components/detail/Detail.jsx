import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
const URL = 'https://rym2.up.railway.app/api/character'
const API_KEY = 'henrystaff'

export default function Detail(props) {

    // const param = useParams() --- Esto es lo mismo que la linea siguiente
    const { id } = useParams()
    const [character, setCharacter] = useState({})

    useEffect(() => {
        axios(`${URL}/${id}?key=${API_KEY}`)
            .then(
                ({ data }) => {
                    if (data.name) {
                        // console.log(data);
                        setCharacter(data);
                    } else {
                        window.alert('No hay personajes con ese ID');
                    }
                }
            );
        return setCharacter({});
    }, [id]);

    // console.log(character);

    return (
        <div>
            <h1>Detail</h1>
            <br />
            <img src={character.image} alt={character.name} />
            <br />
            <h2>Name: {character.name}</h2>
            <h2>Status: {character.status}</h2>
            <h2>Specie: {character.species}</h2>
            <h2>Gender: {character.gender}</h2>
            <h2>Origin: {character.origin?.name}</h2>
            <h2>Location: {character.location?.name}</h2>

        </div>
    );
}