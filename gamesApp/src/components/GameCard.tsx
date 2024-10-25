import React from 'react'
import { Games } from '../hooks/useGames'
import { Card, CardBody, Heading, Image, Text, useColorModeValue } from '@chakra-ui/react'
import PlatformIconsList from './PlatformIconsList'
import Emoji from './Emoji'

interface Props {
    game : Games
    background_image : string
}

const GameCard = ({game} : Props) => {
  const cardBg = useColorModeValue('gray.100', 'gray.700')
  return (
    <Card height="100%" bg={cardBg} borderRadius="lg" boxShadow="md" overflow="hidden" transition="background-color 0.3s ease">
        <Image src={game.background_image}  
        objectFit="cover"
         height="150px"
         width ='100%'
         />
        <CardBody display='flex' flexDirection='column' justifyContent={'space-between'}>
            <Heading fontSize='2xl' textAlign='left'>{game.name}
              <Emoji rating={game.rating_top}/>
            </Heading>
            <PlatformIconsList platforms={game.parent_platforms.map(p => p.platform)}/>
        </CardBody>

    </Card>
  )
}

export default GameCard