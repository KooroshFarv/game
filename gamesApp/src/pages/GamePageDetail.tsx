import React from 'react'
import { useParams } from 'react-router-dom';
import useGame from '../hooks/useGame';
import { Heading, SimpleGrid, Spinner, Text } from '@chakra-ui/react';
import ExpandableText from '../components/ExpandableText';
import DefinitionItem from '../components/DefinitionItem';
import GameAttributes from '../components/GameAttributes';
import GameTrailers from '../components/GameTrailers';
import Screenshots from '../components/Screenshots';


const GamePageDetail = () => {
  const {slug} = useParams();
  const {data : game , isLoading, error} = useGame(slug!)

  if(isLoading) return  <Spinner />;
  if(error || !game) throw error;
  return (
    <>
      <Heading >
        {game.name}
      </Heading>
      <ExpandableText>{game.description_raw}</ExpandableText> 
      <GameAttributes game={game}/>
      <GameTrailers gameId={game.id}/>
      < Screenshots gameId={game.id}/>
    </>
  )
}

export default GamePageDetail