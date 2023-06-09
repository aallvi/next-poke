import React from 'react'
import { Container ,Grid,Image,Text,Card} from '@nextui-org/react'
import { FavoriteCardPokemon } from './FavoriteCardPokemon'

interface Props {
    pokemons:number[]
}

export const FavoritePokemons = ({pokemons}:Props) => {
  return (
    <Grid.Container gap={2} direction='row' justify='flex-start' >

    {
        pokemons.map(id => (
           <FavoriteCardPokemon key={id} id={id} />
        ))
    }

</Grid.Container>
  )
}
