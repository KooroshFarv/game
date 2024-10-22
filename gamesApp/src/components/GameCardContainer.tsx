import {ReactNode} from 'react'
import { Box } from '@chakra-ui/react'


interface Props {
    children : ReactNode;
}


const GameCardContainer = ({children} : Props) => {
  return (
    <Box borderRadius={30} overflow='hidden' width={'300px'}>
        {children}
    </Box>
  )
}

export default GameCardContainer