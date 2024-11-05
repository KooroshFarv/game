import React from 'react'
import useScreenshot from '../hooks/useScreenshot'
import { SimpleGrid, Image } from '@chakra-ui/react';
import ApiClient from "../services/api-client";


interface Props {
    gameId : number
}


const Screenshots = ({gameId} : Props) => {
   const {data, isLoading, error} = useScreenshot(gameId);

   if(isLoading) return null;

   if(error) throw error;


  return (
    <SimpleGrid spacing={3} columns={{base : 1, md : 2}}>
        {data?.results.map(file => <Image key={file.id} src={file.image}/>)}
    </SimpleGrid>
  )
}

export default Screenshots