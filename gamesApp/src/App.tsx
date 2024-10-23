import './App.css'
import { Grid, GridItem , Show} from '@chakra-ui/react'
import Nav from './components/Nav'
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import { useState } from 'react';

function App() {

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
         <Nav />

      </GridItem>
      <Show above='lg'>
      <GridItem area='aside' paddingX={5}>
        <GenreList />
      </GridItem>
      </Show>
      <GridItem area='main'>
        <GameGrid />
      </GridItem>
    </Grid>
  </div>
  )
}

export default App
