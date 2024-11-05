import React, { useState } from 'react'
import {Button, Text} from '@chakra-ui/react'

interface Props{
    children : string
}

const ExpandableText = ({children} : Props) => {
    const[expand, setExpand] = useState(false);
    const limit = 300;
    if (!children) return null;
    const summary = expand ? children : children.substring(0, limit) + '...'
    if(children.length <= limit) 
        return <Text> { children} </Text>

  return (
    <Text>
        {summary} 
        <Button
        onClick={() => setExpand(!expand)}
        size={'xs'} fontWeight={'bold'} marginLeft={2} colorScheme='yellow'>{expand ? 'Show Less' :  'Show More' }</Button>
    </Text>
  )
}

export default ExpandableText