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
                    setDataPokemon(result)
                   
                    if (userList.length === 0) {
                      console.log("La lista de usuario está vacia");
                      setUserList([result, ...userList]);
                    }else{
                      console.log("Estoy en el if del for");
                      for (let i = 0; i < userList.length; i++) {
                        if (result.name === userList[i].name) {
                          console.log("Este pokemon ya está en tu lista");
                        }else{
                          setUserList([result, ...userList]);
                        }
                    }
                  }
                  
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
    <section className="search">
      <h2>Busca tu Pokemon</h2>
      <form onSubmit={handleSubmit} className="homeSearch">
        <input name="search" placeholder="Nombre o Id"/>
        <button type="submit" onClick={paintGif}> Buscar </button>
        {gif == true ? <img src={`${logo}`} alt="pikachuuu" /> : <></>}
      </form>
    </section>
  );
};

export default Search;
