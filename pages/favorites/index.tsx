import { FavoritePokemons } from '@/components/pokemon/FavoritePokemons'
import { Layout } from '@/components/layouts'
import { NoFavorites } from '@/components/ui'
import { localFavorites } from '@/utils'
import { Container ,Grid,Image,Text,Card} from '@nextui-org/react'
import { NextPage } from 'next'
import React, { useState } from 'react'
import { useEffect } from 'react';

const Favoritos: NextPage = () => {


    const [favoritePokemons, setFavoritePokemons] = useState<number[]>([])


    useEffect(() => {

        setFavoritePokemons( localFavorites.pokemons() )
      
    }, [])

    console.log(favoritePokemons)
    


    return (
        <Layout title='Pokemons - Favoritos' >
        
        {
            favoritePokemons.length === 0 ? <NoFavorites/> :

            <FavoritePokemons pokemons={favoritePokemons} />
            
        }

      

        </Layout>
    )
}



export default Favoritos
