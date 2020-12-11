import React from 'react'
import CharacterCard from './CharacterCard'
import styled from 'styled-components'
import styling from './Styling'

export default function CharacterList({characters}) {
    // console.log(characters)
    return (
        <StyledCharacterCard>
            {characters.map((character) => {
                return <CharacterCard key={character.id} character={character}/>
            })}
        </StyledCharacterCard>
    )
}

const StyledCharacterCard = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    /* border: ${styling.border}; */
    width: 100%;
    margin-top: 15%;

`