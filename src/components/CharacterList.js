import React from 'react'
import CharacterCard from './CharacterCard'
import styled from 'styled-components'
import styling from './Styling'

export default function CharacterList({characters}) {
    return (
        <StyledCharacterCard>
            {characters.map((character) => {
                return <CharacterCard key={character.id} character={character}/>
            })}
        </StyledCharacterCard>
    )
}

const StyledCharacterCard = styled.div`
    display: ${styling.display};
    justify-content: space-evenly;//why does setting this to ${styling.justifyContent} mess with my flexbox spacing?
    flex-wrap: wrap;
    /* border: ${styling.border}; */
    width: 100%;
    margin-top: 5%;
`