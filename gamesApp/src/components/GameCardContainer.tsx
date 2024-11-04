import {ReactNode} from 'react'
import { Box } from '@chakra-ui/react'
import { transform } from 'framer-motion';


interface Props {
    children : ReactNode;
}


const GameCardContainer = ({children} : Props) => {
  return (
    <Box _hover={{transform:'scale(1.03)'}} transition={'transform .10s ease-in'} borderRadius={30} overflow='hidden' >
        {children}
    </Box>
  )
}

export default GameCardContainer