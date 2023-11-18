import { useState } from 'react';
import './App.css';
// import Card from './components/Card.jsx';
import Cards from './components/cards/Cards.jsx';
import Nav from './components/nav/Nav.jsx';
import axios from 'axios';
// import SearchBar from './components/searchBar/SearchBar.jsx';
// import characters from './data.js';
// https://rym2.up.railway.app/api/character/10?key=henrystaff
const URL = 'https://rym2.up.railway.app/api/character'
const API_KEY = 'henrystaff'

function App() {

  // const tempcharacter = {
  //   id: 1,
  //   name: 'Rick Sanchez',
  //   status: 'Alive',
  //   species: 'Human',
  //   gender: 'Male',
  //   origin: {
  //     name: 'Earth (C-137)',
  //     url: 'https://rickandmortyapi.com/api/location/1',
  //   },
  //   image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  // };

  const [characters, setCharacters] = useState([])

  // const onSearch = (id) => {
  //   setCharacters([...characters, tempcharacter])
  // }
  function onSearch(id) {
    axios(`${URL}/${id}?key=${API_KEY}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacters([...characters, data]);
        } else {
          window.alert('¡No hay personajes con este ID!');
        }
      }
    );
  }


  return (
    <div className='App'>
      <Nav onSearch={onSearch} />
      <Cards characters={characters} />

    </div>
  );
}

export default App;
