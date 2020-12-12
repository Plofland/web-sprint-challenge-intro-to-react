// import { Accordion } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import styling from './Styling';

export default function CharacterCard({character}) {
    return (
        <StyledCharacterCard>
            <img src={character.image} alt={character.name}/>
            <h2>{character.name}</h2>
            {/* <Accordion character={character}/> */}
            <p class="hide">{character.gender}</p>
            <p class="hide">{character.species}</p>
            <p class="hide">{character.origin.name}</p>
            <p class="hide">{character.status}</p>
        </StyledCharacterCard>
    )
}

const StyledCharacterCard = styled.div`
    display: ${styling.display};
    flex-direction: ${styling.flexDirection};
    img {
        width: ${styling.image.width};
        height: ${styling.image.height};
        border-radius: ${styling.image.borderRadius};
    }
    h2 {
        font-size: ${styling.h2.fontSize};
        font-weight: ${styling.h2.fontWeight};
        color: ${styling.h2.color};
        text-shadow: ${styling.h2.textShadow}; 
    }
    border: ${styling.border};
    margin: ${styling.margin}; 
    width: 10rem;//why does setting this to ${styling.margin} mess with my styling?
    p {
        font-size: ${styling.p.fontSize};
        color: ${styling.p.color}; 
    }
    .hide {
        /* display:none; */
    }
    .show {
        display:${styling.display};
    }
`