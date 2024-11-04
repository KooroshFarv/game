import { Heading } from '@chakra-ui/react'
import { GameQuery } from '../pages/HomePage'
import useGenre from '../hooks/useGenre'
import usePlatforms from '../hooks/usePlatfroms'


interface Props {
    gameQuery : GameQuery
}

const GameHeading = ({gameQuery} : Props) => {
 const { data: platforms } = usePlatforms();
 const platform = platforms?.results.find(p => p.id === gameQuery.platformId)
  const { data : genres} = useGenre();
  const genre = genres?.results.find(g => g.id === gameQuery.genreId)
    const heading = `${platform?.name || ''} ${genre?.name || ''} Games`


  return (
    <Heading as={'h1'} marginY={5} fontSize={'5xl'}>
        {heading}
    </Heading>
  )
}

export default GameHeading