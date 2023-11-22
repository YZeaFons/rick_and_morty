import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
// import Card from './components/Card.jsx';
import About from './components/about/About.jsx';
import Cards from './components/cards/Cards.jsx';
import Detail from './components/detail/Detail.jsx';
import Form from './components/form/Form.jsx';
import Nav from './components/nav/Nav.jsx';
import NotFound from './components/notFound/NotFound.jsx';
import Favorites from './components/favorites/Favorites.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { removeFav } from './components/redux/actions.js';

const URL = 'https://rym2.up.railway.app/api/character'
const API_KEY = 'henrystaff'

function App() {
  // ------------------------------Hooks------------------------------
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const favCharacters = useSelector(state => state.myFavorites)
  const dispatch = useDispatch()
  // ------------------------------States-----------------------------
  const [characters, setCharacters] = useState([])
  const [acces, setAcces] = useState(false)
  // ------------------------------UseEffect--------------------------
  useEffect(() => {
    !acces && navigate('/home');
  }, [acces]);
  // ------------------------------Functions--------------------------
  function charExists(id) {
    const exists = characters.filter(character => character.id === Number(id))
    return exists.length > 0 ? true : false
  }

  function addRandom() {
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
    if (id === "") { window.alert('Debes ingresar un valor') }
    else if (charExists(id)) window.alert(`El personaje con ID ${id} ya existe`)
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

    for (let i = 0; i < favCharacters.length; i++) {
      if (favCharacters[i].id === id) {
        dispatch(removeFav(id))
      }
    }

    setCharacters(
      characters.filter(character => character.id !== Number(id))
    )
  }
  // ---Login---
  const EMAILTEMP = 'yeison@gmail.com'
  const PASSWORD = 'FZeaCor.23'
  function login(userData) {
    if (userData.password === PASSWORD && userData.email === EMAILTEMP) {
      setAcces(true)
      navigate('/home')
    }
    else { window.alert('Usuario o contraseña invalidos') }
  }
  // ---LogOut---
  function logout() {
    setAcces(false)
  }


  return (
    <div className='App'>
      {pathname !== '/' && <Nav onSearch={onSearch} addRandom={addRandom} logout={logout} />}
      <Routes>
        <Route
          path='/favorites'
          element={<Favorites favCharacters={favCharacters} onClose={onClose} />}
        />
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
          element={<Form login={login} />}
        />
      </Routes>
    </div>
  );
}
export default App;
