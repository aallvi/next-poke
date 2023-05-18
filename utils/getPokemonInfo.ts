import { pokeApi } from "@/api"
import { Pokemon } from "@/interfaces"


export const getPokemonInfo = async(nameId:string) => {


    try {

    const {data} = await pokeApi.get<Pokemon> (`/pokemon/${nameId}`)


        const pokemon = {
          id: data.id,
          name:data.name,
          sprites:data.sprites
      }
    
    return pokemon
      
    } catch (error) {
      return null
    }


 

}