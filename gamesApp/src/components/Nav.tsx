import React from 'react'
import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/logo.webp'

const Nav = () => {
  return (
   <HStack>
    <Image src={logo} boxSize='80px'/>
    <p>NavBar !!</p>
   </HStack>
  )
}

export default Nav