import useGenre from '../hooks/useGenre'
import { List, ListItem , HStack, Image, Text, Skeleton} from '@chakra-ui/react'
import GameCardContainer from './GameCardContainer';
import GameCardSkeleton from './GameCardSkeleton';
import { useState, useEffect } from 'react';
import GenreListSkeleton from './GenreListSkeleton';





const GenreList = () => {
    const {data}  = useGenre();
    const [isLoading, setLoading] = useState(true)
   
    useEffect(() => {
      if( data.length > 0){
      setLoading(false)
      }
    },[data])

    if (isLoading) {
      return <GenreListSkeleton />;
    }
    
  return (
    <List> 
    
      {data.map(genre => (<ListItem key={genre.id} paddingY={'5px'}>
            <HStack>
          <Image boxSize={'35px'} borderRadius={8}  src={genre.image_background}
          />
          <Text fontSize='lg'>{genre.name}</Text>
          </HStack>
          </ListItem> ))}
    </List>
  )
}

export default GenreList