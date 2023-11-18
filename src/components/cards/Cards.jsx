import Card from '../card/Card';

export default function Cards({ characters, onClose }) {
   // console.log(characters);


   return (
      <div>
         {
            characters.map((character) => (
               <Card
                  key={character.id}
                  id={character.id}
                  name={character.name}
                  status={character.status}
                  species={character.species}
                  gender={character.gender}
                  origin={character.origin.name}
                  image={character.image}
                  onClose={onClose}
               />
            )

            )
         }
      </div>
   )
}
