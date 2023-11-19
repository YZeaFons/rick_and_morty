import { useState } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import './App.css';
// import Card from './components/Card.jsx';
import axios from 'axios';
import About from './components/about/About.jsx';
import Cards from './components/cards/Cards.jsx';
import Detail from './components/detail/Detail.jsx';
import Nav from './components/nav/Nav.jsx';
import NotFound from './components/notFound/NotFound.jsx';
import Form from './components/form/Form.jsx';
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
  const navigate = useNavigate()
  const { pathname } = useLocation()
  console.log(pathname);

  const [characters, setCharacters] = useState([])

  // const onSearch = (id) => {
  //   setCharacters([...characters, tempcharacter])
  // }
  function charExists(id) {
    const exists = characters.filter(character => character.id === Number(id))
    return exists.length > 0 ? true : false
  }

  function addRandom() {
    // console.log('iteracion');
    const randomChar = Math.floor(Math.random() * 800 + 1)
    if (charExists(randomChar)) addRandom()
    axios(`${URL}/${randomChar}?key=${API_KEY}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacters([...characters, data]);
        } else {
          window.alert('¡No hay personajes con este ID!');
        }
      }
    );
    navigate('/home')
  }

  function onSearch(id) {
    // console.log('seguimiento', charExists(id));
    // const charExists = characters.filter(character => character.id === Number(id))
    // console.log('este es el valor buscado', charExists);
    if (id === "") { window.alert('Debes ingresar un valor') }
    else if (charExists(id)) window.alert(`El personaje con ID ${id} ya existe`)
    // else if (charExists.length > 0) window.alert('Este personaje ya existe')
    else
      axios(`${URL}/${id}?key=${API_KEY}`).then(
        ({ data }) => {
          if (data.name) {
            setCharacters([...characters, data]);
          } else {
            window.alert('¡No hay personajes con este ID!');
          }
        }
      );
    navigate('/home')
  }
  function onClose(id) {
    setCharacters(
      characters.filter(character => character.id !== Number(id))
    )
  }


  return (
    <div className='App'>
      {pathname !== '/' && <Nav onSearch={onSearch} addRandom={addRandom} />}
      <Routes>
        <Route
          path='/home'
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route
          path='/about'
          element={<About />}
        />
        <Route
          path='/detail/:id'
          element={<Detail />}
        />
        <Route
          path='*'
          element={<NotFound />}
        />
        <Route
          path='/'
          element={<Form />}
        />
      </Routes>



    </div>
  );
}

export default App;
