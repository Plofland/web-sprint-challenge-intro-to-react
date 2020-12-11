import React from 'react';
import styled from 'styled-components';
import styling from './Styling';

export default function CharacterCard({character}) {
    console.log(character)
    return (
        <StyledCharacterCard>
            <img src={character.image} alt={character.name}/>
            <h2>{character.name}</h2>
            <p class="hide">{character.gender}</p>
            <p class="hide">{character.species}</p>
            <p class="hide">{character.origin.name}</p>
            <p class="hide">{character.status}</p>
        </StyledCharacterCard>
    )
}

const StyledCharacterCard = styled.div`
    display: flex;
    flex-direction: column;
    
    img {
        width: 10rem;
        height: 10rem;
        border-radius: 1%;
    }
    h2 {
        font-size: 1.2rem;
        font-weight: bold;
        color: whitesmoke;
        text-shadow: 1px 1px 5px #9479EE; 
    }
    border: 1px solid #282828;
    margin: 2%; 
    width: 10rem;
    p {
        font-size: 1rem;
        color: whitesmoke; 
    }
    .hide {
        /* display:none; */
    }
    .show {
        display:flex;
    }
`