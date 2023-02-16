// import './App.css'
import style from './App.module.css'
import Cards from './components/Cards/Cards.jsx'
import NavBar from './components/NavBar/NavBar'
import { useState, useEffect } from 'react'
import {Route, Routes, useLocation, useNavigate} from "react-router-dom";
import About from "./components/About/About";
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form'
import Favorites from './components/favorites/favorites';


function App () {

  const location = useLocation();
  const navigate = useNavigate();

  const [characters, setCharacters] = useState ([]);
  const [access, setAccess] = useState (false);

  const username = "andresalejandrocarola@gmail.com";
  const password = "pass1100";

  const login = (userData) => {
    if (userData.username === username && userData.password === password) {
      setAccess(true);
      navigate('/home');
    }
  }

  useEffect(() => {
    !access && navigate('/')
  },[access]);

 const onSearch = (character) => {
  fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('No hay personajes con ese ID');
         }
      })
 }

 const onClose = (id) => {
    setCharacters(
      characters.filter(character => character.id !== id)
    )
 }

  return (
    
    <div className={style.App}>
      {location.pathname === '/' ? <Form login={login} /> :  <NavBar onSearch={onSearch} /> }
      <hr />
      <Routes>
        <Route path='/home' element= {<Cards onClose={onClose} characters={characters}/>} />
        <Route path='/about' element= {<About />} />
        <Route path= '/detail/:detailId' element={<Detail />} />
        <Route path= '/favorites' element= {<Favorites />} />
      </Routes>
      <div>
        
      </div>
    </div>
  )
}

export default App
