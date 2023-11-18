import { useState } from "react";

export default function SearchBar(props) {
   // console.log(props);
   const [id, setId] = useState('')

   const handleChange = (event) => {
      const { value } = event.target
      // console.log(event.target.value);
      setId(value)
   }

   const handleClick = event => {
      event.preventDefault()
      props.onSearch(id)
      setId('')
   }
   // console.log(id)

   return (
      <div>
         <input
            type='text'
            name="search"
            id="search"
            onChange={handleChange}
            value={id}
         />
         <button onClick={handleClick}>Agregar</button>
      </div>
   );
}
