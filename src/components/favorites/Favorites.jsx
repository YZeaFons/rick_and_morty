import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../card/Card';
export default function Favorites({ favCharacters, onClose }) {

    // const favCharacters = useSelector(state => state.myFavorites)
    // console.log(favCharacters);
    // console.log(props);
    return (
        <div>
            {
                favCharacters.map((eachCharacter) => {
                    <Card
                        key={eachCharacter.id}
                        id={eachCharacter.id}
                        name={eachCharacter.name}
                        status={eachCharacter.status}
                        species={eachCharacter.species}
                        gender={eachCharacter.gender}
                        origin={eachCharacter.origin?.name}
                        image={eachCharacter.image}
                        onClose={onClose}
                    />
                })
            }
        </div>
    )
}
