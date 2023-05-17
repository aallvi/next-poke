import { pokeApi } from "@/api"
import { Layout } from "@/components/layouts"
import { Button, Card, Grid, Row, Text } from "@nextui-org/react"
import { NextPage, GetStaticProps } from "next"
import { PokemonListResponse, SmallPokemon } from '../interfaces/pokemon-list';
import { PokemonCard } from "@/components/pokemon";




interface Props {
   pokemons: SmallPokemon[]
}


const Home: NextPage<Props> = ({pokemons})  =>{


   console.log(pokemons)

  return (

     <Layout title="Listado de pokemons" >

      <Grid.Container  gap={2} justify="flex-start" >
         {
            pokemons.map( (poke,i) => (
                 <PokemonCard key={i}  pokemon={poke} />
            
            ) )
         }
      </Grid.Container>

      

     </Layout>



  )
}

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.


export const getStaticProps: GetStaticProps = async (ctx) => {
   // const { data } = await  // your fetch function here 

   const {data} = await pokeApi.get<PokemonListResponse> ('/pokemon?limit=151')


const pokemons: SmallPokemon[] = data.results.map( (poke,i) => ({
     ...poke,
     id: i + 1,
     img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg`

}) ) 




   // Mi solucion 

//    let pokemons = data.results

//    for (let i = 0; i < pokemons.length; i++) {
//       pokemons[i].id = Number(pokemons[i].url.split('')[pokemons[i].url.length - 2]) 
//       pokemons[i].img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemons[i].id}.svg`
   
//   }

   

   // https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg

   console.log(data)


   return {
      props: {
         pokemons:pokemons
      }
   }
}


export default Home