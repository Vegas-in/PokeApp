import React from "react";
import logo from "../../assets/logo.png";
import logo2 from "../../assets/pokeball.png";


const Header = () => {
  return( 
      <header className="header">
        <img src={`${logo2}`} alt="pokeapp" className="pokeball"/>
        <img src={`${logo}`} alt="pokeapp" />
      </header>
  );
};

export default Header;
