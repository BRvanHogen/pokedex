import React from 'react';
import '../fonts/fonts.css';
import '../header.css';
import pokeball from '../assets/pokeball_PNG21.png';


function Header() {
    return (
    <>
        <div className="header">
            <img src={pokeball} alt="pokeball" id="pokeball"/>
            <h1>Wie is deze Pokémon?</h1>
        </div>
    </>
    );
}

//'../assets/pokeball-pixel-art.png'
export default Header;