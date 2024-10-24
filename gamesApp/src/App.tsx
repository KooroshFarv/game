import './App.css'
import { Box, flexbox, Grid, GridItem , HStack, Show} from '@chakra-ui/react'
import Nav from './components/Nav'
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import { useState } from 'react';
import { Genre } from './hooks/useGenre';
import PlatformSelector from './components/PlatformSelector';
import { Platform } from './hooks/useGames';
import SortSelector from './components/sortSelector';
import GameHeading from './components/GameHeading';


export interface GameQuery {
  sortOrder: string;
  genre : Genre | null;
  platform : Platform | null
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
        <GenreList onSelectGenre={(genre) => setGameQuery({...gameQuery, genre} )} selectedGenre={gameQuery.genre}/>
      </GridItem> 
      </Show>
      <GridItem area='main'>
        <Box textAlign={'left'} paddingLeft={'40px'}>
      <GameHeading gameQuery={gameQuery}/>
        </Box>

        <HStack spacing={5} paddingLeft={'50px'}>
      <PlatformSelector selectedPlatform = {gameQuery.platform } onSelectPlatform={(platform) => setGameQuery({...gameQuery, platform})}/>
        <SortSelector sortOrder={gameQuery.sortOrder} onSelectSortOrder={(sortOrder) => setGameQuery({...gameQuery, sortOrder})}/>
        </HStack>
        <GameGrid gameQuery={gameQuery}/>
      </GridItem>
    </Grid>
  </div>
  )
}

export default App
