import { Box, Grid, GridItem, HStack, Show } from '@chakra-ui/react'
import {useState} from 'react'
import GameGrid from '../components/GameGrid'
import GameHeading from '../components/GameHeading'
import GenreList from '../components/GenreList'
import PlatformSelector from '../components/PlatformSelector'
import SortSelector from '../components/sortSelector'



export interface GameQuery {
    sortOrder: string;
    genreId?: number ;
    platformId? : number
    searchText : string
  }



const HomePage = () => {
    const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)

  return (
    <Grid templateAreas={{
        base : `"main"`,
        lg : `"aside main"` 
      }}
      templateColumns={{
        base : '1fr',
        lg : '200px 1fr'
      }}
      >
        
       
        <Show above='lg'>
        <GridItem area='aside' paddingX={5}>
          <GenreList onSelectGenre={(genre) => setGameQuery({...gameQuery, genreId : genre.id} )} selectedGenreId={gameQuery.genreId} />
        </GridItem> 
        </Show>
        <GridItem area='main'>
          <Box textAlign={'left'} paddingLeft={'40px'}>
        <GameHeading gameQuery={gameQuery}/>
          </Box>
  
          <HStack spacing={5} paddingLeft={'50px'}>
        <PlatformSelector selectedPlatformId = {gameQuery.platformId } onSelectPlatform={(platform) => setGameQuery({...gameQuery,platformId : platform.id})}/>
          <SortSelector sortOrder={gameQuery.sortOrder} onSelectSortOrder={(sortOrder) => setGameQuery({...gameQuery, sortOrder})}/>
          </HStack>
          <GameGrid gameQuery={gameQuery}/>
        </GridItem>
      </Grid>
  )
}

export default HomePage