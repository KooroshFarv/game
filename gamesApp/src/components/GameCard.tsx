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
    <Card borderRadius={30} overflow='hidden'>
        <Image src={game.background_image}  width="100%"  // This ensures the image takes up the full width of the card
        height="190px" // Adjust the height as needed
        objectFit="cover"/>
        <CardBody>
            <Heading fontSize='2xl'>{game.name}</Heading>
            <PlatformIconsList platforms={game.parent_platforms.map(p => p.platform)}/>
        </CardBody>

    </Card>
  )
}

export default GameCard