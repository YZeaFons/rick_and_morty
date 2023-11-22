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
      <div>
         <input
            type='text'
            name="search"
            id="search"
            onChange={handleChange}
            value={id}
         />
         <button onClick={handleClick} className='personalButton2'>Agregar</button>
         <br />
      </div>
   );
}
