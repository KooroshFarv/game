import './App.css'
import { Grid, GridItem , Show} from '@chakra-ui/react'
import Nav from './components/Nav'
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';

function App() {

  return (
  <div>
    <Grid templateAreas={{
      base : `"nav" "main"`,
      lg : `"nav nav" "aside main"`
    }}>
      <GridItem area='nav'>     
         <Nav />

      </GridItem>
      <Show above='lg'>
      <GridItem area='aside'>
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
