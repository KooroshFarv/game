import useGenre, { Genre } from '../hooks/useGenre'
import { List, ListItem , HStack, Image, Text, Skeleton, Button, Link} from '@chakra-ui/react'
import GameCardContainer from './GameCardContainer';
import GameCardSkeleton from './GameCardSkeleton';
import { useState, useEffect } from 'react';
import GenreListSkeleton from './GenreListSkeleton';



interface Props {
  onSelectGenre : (genre : Genre) => void 
  selectedGenre : Genre | null
}

const GenreList = ({onSelectGenre, selectedGenre} : Props) => {
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
          <Button fontStyle={genre.id === selectedGenre?.id ? 'italic' : 'normal'} fontWeight={genre.id === selectedGenre?.id ?'bold' : 'normal' } onClick={() => onSelectGenre(genre)} fontSize='lg' variant='link'>{genre.name}</Button>
          </HStack>
          </ListItem> ))}
    </List>
  )
}

export default GenreList