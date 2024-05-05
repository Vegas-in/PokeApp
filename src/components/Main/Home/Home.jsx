import { useState } from 'react'
import Card from "./Card";
import Search from "./Search/Search";
import PokemonList from "./PokemonList";

const Home = () => {

  const [dataPokemon, setDataPokemon] = useState({});
  const [userList, setUserList] = useState([]);

  console.log(userList);

  return( 
    <section className="home">
      <Card dataPokemon={dataPokemon}/>
      <Search setDataPokemon={setDataPokemon} setUserList={setUserList} userList={userList}/>
      <PokemonList userList={userList}/>
    </section>
  );
};

export default Home;