import React from 'react'
import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/logo.webp'
import SwitchMode from './SwitchMode'

const Nav = () => {
  return (
   <HStack justifyContent={'space-between'} padding='10px'>
    <Image src={logo} boxSize='80px'/>
    <SwitchMode />
   </HStack>
  )
}

export default Nav