import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';

function Pokemon({name}) {
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
    }, []);  //moet na function call, anders loop


    return (
        <>
            <div>
                <p>{singlePokemon.name}</p>
                <p>{singlePokemon.weight}lbs</p>
                {singlePokemon.sprites && <img src={singlePokemon.sprites.front_default}/>}
                <p>number of abilities: {abilities}</p>
                <p>number of moves: {moves}</p>
            </div>
        </>

    );
}

export default Pokemon;