import axios from 'axios';
import React, { useEffect } from 'react';
import "./main.scss";
import './media.scss';

function Main({ pokemon, setPokemon }) {
    useEffect(() => {
        axios('https://pokeapi.co/api/v2/pokemon/').then(({ data }) =>
          setPokemon(data.results)
        )
      }, [setPokemon]);
    return (
        <>
            <div className='main'>
                <div className="container">
                    {pokemon.map((item, idx) => {
                        return (
                            <div className="main__block">
                                <img className='main__block_img' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${idx + 1}.png`} alt="" />
                                <p className='main__block_title'>{item.name}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Main