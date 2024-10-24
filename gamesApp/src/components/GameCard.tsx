import React from 'react'
import { Games } from '../hooks/useGames'
import { Card, CardBody, Heading, Image, Text } from '@chakra-ui/react'
import PlatformIconsList from './PlatformIconsList'

interface Props {
    game : Games
    background_image : string
}

const GameCard = ({game} : Props) => {
  return (
    <Card>
        <Image src={game.background_image}  
        objectFit="cover"/>
        <CardBody>
          
            <Heading fontSize='2xl' textAlign='left'>{game.name}</Heading>
            <PlatformIconsList platforms={game.parent_platforms.map(p => p.platform)}/>
        </CardBody>

    </Card>
  )
}

export default GameCard