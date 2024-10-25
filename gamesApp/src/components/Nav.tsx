import React from 'react'
import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/loggggooo.jpg'
import SwitchMode from './SwitchMode'
import SearchInput from './searchInput'
import log from '../assets/stock-vector-let-s-play-neon-sign-bright-signboard-light-banner-game-logo-neon-emblem-vector-illustration-1310883713.jpg'

interface Props {
  onSearch : (searchText : string) => void
}

const Nav = ({onSearch} : Props) => {
  return (
   <HStack  padding='10px'>
    <Image src={logo} boxSize='80px'borderRadius={20} marginRight={5}/>
    <SearchInput onSearch={onSearch}/>
    <SwitchMode />
   </HStack>
  )
}

export default Nav