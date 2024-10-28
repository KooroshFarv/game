import useGenre, { Genre } from '../hooks/useGenre'
import { List, ListItem , HStack, Image, Text, Skeleton, Button, Link, Heading} from '@chakra-ui/react'
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
   

    
    
  return (
    <>
    < Heading marginBottom={3} fontSize={'2xl'} textAlign={'left'} color={'gray.300'}>Genre</Heading>
    <List> 
    
      {data?.results.map(genre => (<ListItem key={genre.id} paddingY={'5px'}>
            <HStack marginBottom={3}>
          <Image boxSize={'35px'} borderRadius={8}  src={genre.image_background} objectFit={'cover'}
          />
          <Button whiteSpace={'normal'} textAlign='left' fontStyle={genre.id === selectedGenre?.id ? 'italic' : 'normal'} fontWeight={genre.id === selectedGenre?.id ?'bold' : 'normal' } onClick={() => onSelectGenre(genre)} fontSize='lg' variant='link'>{genre.name}</Button>
          </HStack>
          </ListItem> ))}
    </List>
    </>
  )
}

export default GenreList