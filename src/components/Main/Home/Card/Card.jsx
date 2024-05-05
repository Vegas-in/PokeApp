//import React from "react";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const pokeCard = ({dataPokemon}) => {


  //const namePoke = dataPokemon.name;
  //const numPoke = dataPokemon.id;
  //const imgPoke = dataPokemon.sprites.other.dream_world.front_default;

  if (Object.keys(dataPokemon).length === 0) {
    return <></>
  }else{

    const data7 = dataPokemon.types[0].type.name;  //ESTE EL TIPO

    const data = dataPokemon.stats[0].base_stat
    const data2 = dataPokemon.stats[0].stat.name
    const data3 = dataPokemon.stats[1].base_stat
    const data4 = dataPokemon.stats[1].stat.name
    const data5 = dataPokemon.stats[2].base_stat
    const data6 = dataPokemon.stats[2].stat.name
  
    const { name , height, weight, id , sprites : {other : {dream_world : { front_default : imgPoke }}}} = dataPokemon;

    return (
      <section className="contentCard">
        <article className="pokeCard"></article>
        <Card sx={{ maxWidth: 445 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="420"
              image={imgPoke}
              alt={name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <p className='pokename'>{name}</p>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <div><p>#{id}</p></div>
                <div className='contPokeSpecs'><p className='pokeType'>Type: </p> <p>{data7}</p></div>
                <div className='contPokeSpecs'><p className='pokeSpecs'>Weight: </p> <p>{weight / 10} kg</p></div>
                <div className='contPokeSpecs'><p className='pokeSpecs'>Height: </p> <p>{height / 10} m</p></div>
                <div className='contPokeSpecs'><p className='pokeStats'> {data2}: </p> <p>{data}</p></div>
                <div className='contPokeSpecs'><p className='pokeStats'> {data4}: </p> <p>{data3}</p></div>
                <div className='contPokeSpecs'><p className='pokeStats'> {data6}: </p> <p>{data5}</p></div>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </section>
    );
  }

  
  
};

export default pokeCard;
