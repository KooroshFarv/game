import './App.css'
import { Box, flexbox, Grid, GridItem , HStack, Show} from '@chakra-ui/react'
import Nav from './components/Nav'
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import { useState } from 'react';
import { Genre } from './hooks/useGenre';
import PlatformSelector from './components/PlatformSelector';
import { Platform } from './hooks/usePlatfroms';
import SortSelector from './components/sortSelector';
import GameHeading from './components/GameHeading';


export interface GameQuery {
  sortOrder: string;
  genreId?: number ;
  platformId? : number
  searchText : string
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)

  return (
  <div>
    <Grid templateAreas={{
      base : `"nav" "main"`,
      lg : `"nav nav" "aside main"` 
    }}
    templateColumns={{
      base : '1fr',
      lg : '200px 1fr'
    }}
    >
      
      <GridItem area='nav'>     
         <Nav onSearch={(searchText) => setGameQuery({...gameQuery, searchText })}/>
      </GridItem>
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
  </div>
  )
}

export default App
