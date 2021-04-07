import React, {useState, useEffect} from 'react';
import './App.css';
import './fonts/fonts.css';
import axios from 'axios';
import Pokemon from './components/Pokemon';
import Header from './components/Header';

export const url = true;

function App() {
    //functionality
    const [pokemon, setPokemon] = useState([]);
    const [url, setUrl] = useState(`https://pokeapi.co/api/v2/pokemon/`);
    const [nextUrl, setNextUrl] = useState('');
    const [previousUrl, setPreviousUrl] = useState('');
    //UX
    const [loading, toggleLoading] = useState(false);
    const [error, setError] = useState(false);

    function handleClickPrevious() {
        setUrl(previousUrl);
    }

    function handleClickNext() {
        setUrl(nextUrl);
    }



    //function declaration
    async function fetchPokemon() {
        toggleLoading(true);
        setError(false);

        try {
            const {data} =
                await axios.get(url);
            setPokemon(data.results);
            console.log(data.results);
            setNextUrl(data.next);
            setPreviousUrl(data.previous);

        } catch (e) {
            console.error(e);
            setError(true);
        }
        toggleLoading(false);
    }

    //function call
    useEffect(() => {
        fetchPokemon();
    }, [url]);


    return (
        <>
            <Header/>
            {error && <span>de Pokémon zijn niet voor je gevangen</span>}
            {loading && (<span>Catching Pokémon...</span>)}
            <ul>
                {pokemon.map((pokemon) => {
                    console.log(pokemon);
                    return (
                        <Pokemon name={pokemon.name} url={url}/> //hier url number toegevoegd
                    )
                })}
            </ul>
            <div className="button-container">
                <button type="button"
                        disabled={url === `https://pokeapi.co/api/v2/pokemon/`}
                        onClick={handleClickPrevious}>previous 20
                </button>
                <button
                    type="button"
                    disabled={url === `https://pokeapi.co/api/v2/pokemon?offset=1100&limit=20`}
                    onClick={handleClickNext}
                >
                    next 20
                </button>
            </div>
        </>
    );
}

export default App;