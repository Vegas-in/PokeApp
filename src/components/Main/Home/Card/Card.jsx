import React from "react";

const Card = ({dataPokemon}) => {


  //const namePoke = dataPokemon.name;
  //const numPoke = dataPokemon.id;
  //const imgPoke = dataPokemon.sprites.other.dream_world.front_default;


  /* const data7 = dataPokemon.types[0].type.name;  //ESTE EL TIPO

  const data = dataPokemon.stats[0].base_stat
  const data2 = dataPokemon.stats[0].stat.name
  const data3 = dataPokemon.stats[1].base_stat
  const data4 = dataPokemon.stats[1].stat.name
  const data5 = dataPokemon.stats[2].base_stat
  const data6 = dataPokemon.stats[2].stat.name

  console.log( data);
  console.log( data2);
  console.log( data3);
  console.log( data4);
  console.log( data5);
  console.log( data6);
  console.log( data7);
 */
  const { name , height, weight, id /* , sprites : {other : {dream_world : { front_default : imgPoke }}} */} = dataPokemon;
  
  return (
    <section>
      <article>
        {/* <div><p>Type: {type}</p></div> */}
        <div><p>Weight: {weight}</p></div>
        <div><p>Height: {height}</p></div>
        <div><p>{name}</p></div>
        <div><p>{id}</p></div>
       {/*  <div><img src={imgPoke} alt={namePoke} /></div> */}
      </article>
    </section>
  );
};

export default Card;
