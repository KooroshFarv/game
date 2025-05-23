import { useParams } from 'react-router-dom';
import useGame from '../hooks/useGame';
import { GridItem, Heading, SimpleGrid, Spinner, Text } from '@chakra-ui/react';
import ExpandableText from '../components/ExpandableText';
import GameAttributes from '../components/GameAttributes';
import GameTrailers from '../components/GameTrailers';
import Screenshots from '../components/Screenshots';


const GamePageDetail = () => {
  const {slug} = useParams();
  const {data : game , isLoading, error} = useGame(slug!)

  if(isLoading) return  <Spinner />;
  if(error || !game) throw error;
  return (
    <SimpleGrid columns={{base : 1, md: 2}} spacing={10}> 
    <GridItem>
      <Heading>{game.name}</Heading>
      <ExpandableText>{game.description_raw}</ExpandableText> 
      <GameAttributes game={game}/>
    </GridItem>
    <GridItem>
      <GameTrailers gameId={game.id}/>
      < Screenshots gameId={game.id}/>
    </GridItem>
    </SimpleGrid>
  )
}

export default GamePageDetail