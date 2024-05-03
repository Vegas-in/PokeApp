import React, { useState, useEffect } from "react";
import axios from 'axios';
import logo from "../../../../assets/pikachuLupa.gif";

const Search = ({ setDataPokemon, userList, setUserList }) => {


  const [ pokeSerched, setPokeSerched ] = useState("");
  const [ gif, setGif ] = useState(false);

  useEffect(() => {
    
        const getPokemon = async () => {
            try {

                if (pokeSerched.length === 0) {
                  console.log("Se ha renderizado el componente y está vacío, no hay datos que pintar");
                }else{
                  const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeSerched}`);
                  const result = resp.data;
                  setDataPokemon(result);
                  console.log(resp.data);
                  setUserList([result, ...userList])
                }
                
                
            } catch {
                console.log('No hay datos');
            }


        }

        getPokemon();
            
  }, [pokeSerched]);


  const handleSubmit = (e) => {
    e.preventDefault();
    setPokeSerched(e.target.search.value);
    e.target.search.value = "";
  };

  const paintGif = () => {

    setGif(true)

    setTimeout(() => {
      setGif(false)
    }, 2000);
   
  };

  return (
    <section className="home">
      <h2>Busca tu Pokemon</h2>
        <form onSubmit={handleSubmit} className="homeSearch">
          <input name="search" />
          <button type="submit" onClick={paintGif}> Buscar </button>
          {gif == true ? <img src={`${logo}`} alt="pikachuuu" width="100px"/> : <></>}
        </form>
    </section>
  );
};

export default Search;
