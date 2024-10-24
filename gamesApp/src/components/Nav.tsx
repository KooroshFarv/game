import React from 'react'
import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/logo.webp'
import SwitchMode from './SwitchMode'
import SearchInput from './searchInput'

interface Props {
  onSearch : (searchText : string) => void
}

const Nav = ({onSearch} : Props) => {
  return (
   <HStack  padding='10px'>
    <Image src={logo} boxSize='80px'/>
    <SearchInput onSearch={onSearch}/>
    <SwitchMode />
   </HStack>
  )
}

export default Nav