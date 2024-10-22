
import { SimpleGrid, Text } from '@chakra-ui/react'
import useGames from '../hooks/useGames'
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';



const GameGrid = () => {
 const {data, error, isLoading} = useGames();
 const skeletons = [1,2,3,4,5,6,7,8]
  return (
    <>
    { error && <Text>{error}</Text>}
    <SimpleGrid columns={{sm : 1, md : 2, lg : 3, xl : 3}} padding={10} spacing={8}>
        {isLoading && skeletons.map((skeleton) => (
            <GameCardContainer>
            <GameCardSkeleton key={skeleton}/>
            </GameCardContainer>
        ))}
        {data.map(data => ( 
            <GameCardContainer>
            <GameCard key={data.id} game={data} background_image={''}/>
            </GameCardContainer>
        ))}

    </SimpleGrid>
    </>
  )
}

export default GameGrid