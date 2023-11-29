import styles from './searchBar.module.css'
import { useState } from "react";

export default function SearchBar(props) {
   const [id, setId] = useState('')

   const handleChange = (event) => {
      const { value } = event.target
      setId(value)
   }

   const handleClick = event => {
      event.preventDefault()
      props.onSearch(id)
      setId('')
   }

   return (
      <div className={styles.container}>
         <label className="nameNavId">Personaje: </label>
         <input
            type='text'
            name="search"
            id="search"
            onChange={handleChange}
            value={id}
            placeholder="ingrese ID del personaje"
         />
         <button onClick={handleClick} className='personalButton2'>Agregar</button>
         <button onClick={() => props.addRandom()} className='personalButton2'>Agregar Aleatorio</button>
         <br />
      </div>
   );
}
