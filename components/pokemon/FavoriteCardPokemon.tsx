
import { Container ,Grid,Image,Text,Card} from '@nextui-org/react'
import { useRouter } from 'next/router'

export const FavoriteCardPokemon = ({id}: {id:number} ) => {



    const router = useRouter()

    const onClick = () => {
          router.push(`/pokemon/${id}`)
    }

  return (
    <Grid xs={6} sm={3} onClick={onClick} md={2} xl={1} key={id} >
                <Card  isHoverable isPressable css={{padding:10}} >
                    <Card.Image
                    width={'100%'}
                    height={140}
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}


                    />

                </Card>

            </Grid>
  )
}
