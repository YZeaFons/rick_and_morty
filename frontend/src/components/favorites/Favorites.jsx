import React, { useState } from 'react';
import Card from '../card/Card.jsx';
import { useDispatch } from 'react-redux';
import { filterCards, orderCards } from '../redux/actions.js';
export default function Favorites({ favCharacters, onClose }) {
    const dispatch = useDispatch()

    const [aux, setAux] = useState(false)

    function handleOrdeer(event) {
        if (aux) setAux(false)
        else setAux(true)
        dispatch(orderCards(event.target.value))
    }
    function handleFilter(event) {
        dispatch(filterCards('All'))
        dispatch(filterCards(event.target.value))
    }
    // const favCharacters = useSelector(state => state.myFavorites)
    return (
        <div>
            <select onChange={handleOrdeer}>
                <option value='A'>Ascendente</option>
                <option value='D'>Descendente</option>
            </select>
            <select onChange={handleFilter}>
                <option value='All'>All</option>
                <option value='Male'>Male</option>
                <option value='Female'>Female</option>
                <option value='Genderless'>Genderless</option>
                <option value='unknown'>Unknown</option>
            </select>
            <div>
                {
                    !favCharacters.length
                        ? <h2>Por favor seleccione personajes favoritos</h2>
                        :
                        favCharacters.map(eachCharacter => (
                            <Card
                                key={eachCharacter.id}
                                id={eachCharacter.id}
                                name={eachCharacter.name}
                                status={eachCharacter.status}
                                species={eachCharacter.species}
                                gender={eachCharacter.gender}
                                origin={eachCharacter.origin}
                                image={eachCharacter.image}
                                onClose={onClose}
                            />
                        ))
                }
            </div>
        </div>
    )
}
