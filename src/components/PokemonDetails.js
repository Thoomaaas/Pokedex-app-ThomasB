import React, { useEffect, useState } from 'react'
import Header from './common_files/Header';


const PokemonDetails = ({match}) => {

  const [height, setheight] = useState([]);
  const [pokemonType, setPokemonType] = useState("");
  const [numberOfGame, setNumberOfGame] = useState([]);
  const [image, setImage] = useState(null); 

  useEffect(()=>{
    const fetchSinglePost = ()=>{
      fetch(`https://pokeapi.co/api/v2${match.url}`)
      .then(height =>{
        return height.json()
      })
      .then(data=>{
        console.log(data)
        setheight(data)
        setPokemonType(data.types[0].type.name)
        setNumberOfGame(data)
        setImage(data.sprites["front_default"])
      })
    }
    fetchSinglePost();
  
  }, [])

  


  return (
    <div className="app-container">
    <Header/>

        <div className="card_single_container">
              <div className="card card_single" >
                <div className="img_single">
                   <img src={image} alt={height.name} className="card-img-top" />  
                </div>
                <div className="card-body">

                  <h5 className="card-title">Nom: {height.name}</h5>
                </div>
                
                <ul className="list-group list-group-flush">
                  <h5 className="profil">PROFIL</h5>
                  <li className="list-group-item">Ordre dans le Pokedex: {height.order }</li>
                  <li className="list-group-item"> Type du Pokemon: {pokemonType} </li>
                  <li className="list-group-item"> taille du Pokemon: {height.height } Us </li>
                  <li className="list-group-item">Poids du Pokemon {numberOfGame.weight} Kg</li>

                </ul> 

                <br></br>
                <ul className="list-group list-group-flush">
                  <h5 className="profil">statistiques</h5>
                  <li className="list-group-item">Ordre dans le Pokedex: {height.order }</li>
                  <li className="list-group-item"> Type du Pokemon: {pokemonType} </li>
                  <li className="list-group-item"> taille du Pokemon: {height.height } Us </li>
                  <li className="list-group-item">Poids du Pokemon {numberOfGame.weight} Kg</li>

                </ul>    

           </div>

         </div>
    
    </div>
  );
}

export default PokemonDetails;