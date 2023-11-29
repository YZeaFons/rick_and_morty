import './Card.css'
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { addFav, removeFav } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';

export default function Card(props) {
   // --------------Hooks---------------------
   const dispatch = useDispatch()
   const myFavCharacters = useSelector(state => state.myFavorites)
   useEffect(() => {
      // favCharacters.forEach((fav) => {
      //    if (fav.id === props.id) {
      //       setFav(true);
      //    }
      // });
      for (let i = 0; i < myFavCharacters.length; i++) {
         if (myFavCharacters[i].id === props.id) setFav(true)
      }
   }, [myFavCharacters]);
   // --------------States----------------------
   const [isFav, setFav] = useState(false)
   // --------------Functions-----------------

   function handleFavorite() {
      if (isFav) {
         setFav(false)
         dispatch(removeFav(props.id));
      } else {
         setFav(true)
         dispatch(addFav(props))
      }
   }

   return (
      <div className='card'>
         <div className='card2'>
            <Link
               to={`/detail/${props.id}`}
            >
               <img src={props.image} alt='' />
            </Link>
            <button onClick={() => props.onClose(props.id)}>X</button>
            {
               isFav ? (
                  <button onClick={handleFavorite}>❤️</button>
               ) : (
                  <button onClick={handleFavorite}>🤍</button>
               )
            }
            <h2 className='textId'>ID: {props.id}</h2>

            <h2 className='heading'>Name: {props.name}</h2>

            <h2>Status: {props.status}</h2>
            <h2>Specie: {props.species}</h2>
            <h2>Gender: {props.gender}</h2>
            <h2>Origin: {props.origin}</h2>
         </div>
      </div>
   );
}
