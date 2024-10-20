import './App.css'
import { Grid, GridItem , Show} from '@chakra-ui/react'
import Nav from './components/Nav'

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
      <GridItem area='aside' bg={'gold'}>aside</GridItem>
      </Show>
      <GridItem area='main' bg={'dodgerBlue'}>main</GridItem>
    </Grid>
  </div>
  )
}

export default App
