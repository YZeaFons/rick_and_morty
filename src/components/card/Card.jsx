import { Link } from "react-router-dom";

export default function Card(props) {
   // console.log(props);
   console.log(props.id);
   return (
      <div>
         <button onClick={() => props.onClose(props.id)}>X</button>
         <h2>ID: {props.id}</h2>

         <h2>Name: {props.name}</h2>

         <h2>Status: {props.status}</h2>
         <h2>Specie: {props.species}</h2>
         <h2>Gender: {props.gender}</h2>
         <h2>Origin: {props.origin}</h2>
         <Link
            to={`/detail/${props.id}`}
         >
            <img src={props.image} alt='' />
         </Link>
      </div>
   );
}
