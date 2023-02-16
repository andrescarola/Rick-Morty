import style from './SearchBar.module.css'
import { useState } from 'react';

function SearchBar({onSearch}) {

const [character, setCharacter] = useState('')

const handleSearch = (event) => {
   setCharacter(event.target.value)
}

   return (
      <div className={style.input}>
         <input type='search' value={character} onChange= {handleSearch} />
         <button className={style.agregar} onClick={()=> onSearch(character)}>Agregar</button>
      </div>
   );
}

export default SearchBar;