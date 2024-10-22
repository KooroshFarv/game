import useGenre from '../hooks/useGenre'
import { List, ListItem , HStack, Image, Text} from '@chakra-ui/react'



const GenreList = () => {
    const {data}  = useGenre();
    console.log(data[2]);
  return (
    <List>
        {data.map(genre => (
          <ListItem key={genre.id} paddingY={'5px'}>
            <HStack>
          <Image boxSize={'35px'} borderRadius={8}  src={genre.image_background}
          />
          <Text fontSize='lg'>{genre.name}</Text>
          </HStack>
          </ListItem>
          ))}
    </List>
  )
}

export default GenreList