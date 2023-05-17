import { useTheme, Text, Spacer } from "@nextui-org/react"
import Image from "next/image"
import { useRouter } from "next/router"
import { Button, Card, Grid, Row, Link } from "@nextui-org/react"

import NextLink from "next/link"

export const NavBar = () => {


    const {theme, isDark} = useTheme()

   


  return (
    <div style={{
         display:'flex',
         width: '100%',
         flexDirection:'row',
         alignItems:'center',
         justifyContent:'start',
         padding:'0x 20px',
         backgroundColor:theme?.colors.gray100.value
         
    }} >   


      <NextLink href="/" passHref  legacyBehavior>

        <Link>

          <Image
            
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
            alt="icono de la app"
            width={70}
            height={70}
            />

            <Text color="white" h2> P  </Text>
            <Text  color="white" h3> okemon  </Text>


        </Link>
        
   

      </NextLink>


      
            <Spacer css={{flex:1}} />

            <NextLink href="/favorites" passHref  legacyBehavior>
            <Link css={{marginRight:'10px'}} >

               <Text color="white" h3> Favoritos  </Text>
               </Link>

            </NextLink>



        
    </div>
  )
}
