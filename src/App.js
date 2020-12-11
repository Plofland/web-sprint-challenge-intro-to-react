import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import CharacterList from './components/CharacterList'


const App = () => {
  
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then(res => {
        // console.log(res.data.results);
        setCharacters(res.data.results)
      }) 
      .catch(err => {
        console.log(err)
      }) 
  }, [])

  

  return (
    <div className="App">
      <h1 className="Header">Rick and Morty Characters</h1>
      <CharacterList characters = {characters}/>
    </div>
  );
}

export default App;
