import React, {useState, useEffect} from 'react';
import '../Pokemon.css';
import '../fonts/fonts.css';
import axios from 'axios';
import urlNumber from '../App';
import url from '../App';

function Pokemon({name, url}) {
    const [singlePokemon, setSinglePokemon] = useState({});
    const [abilities, setAbilities] = useState([]);
    const [moves, setMoves] = useState([]);

    async function fetchSinglePokemon() {
        try {
            const {data} =
                await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
            setSinglePokemon(data);
            setAbilities(data.abilities.length);
            setMoves(data.moves.length);

        } catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        //function call
        fetchSinglePokemon();
    }, [url]);  //moet na function call, anders loop


    return (
        <>
            <div className="pokemon-card">
                <h3>{singlePokemon.name}</h3>
                {singlePokemon.sprites && <img src={singlePokemon.sprites.front_default}/>}
                <p>weight: {singlePokemon.weight}lbs</p>
                <p>number of abilities: {abilities}</p>
                <p>number of moves: {moves}</p>
            </div>
        </>

    );
}

export default Pokemon;