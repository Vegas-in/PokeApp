import React from "react";


const PokemonList = (userList) => {


  const paintItems = () =>{
    
    const data = userList.userList
    

    if (data.length > 0) {

      console.log(data);
      return data.map((item, index) => 
     
        <article key={index} className="cardList">
            <div><p>{item.name}</p></div>
            <div><p>#{item.id}</p></div>
            <div><img src={item.sprites.front_default} alt={item.name} /></div>
        </article>
    );
    }

  }

    

  return (
    <section className="pokemonList">
      {paintItems()}
    </section>
  );

};

export default PokemonList;
