import React from 'react'
import { HStack, Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import logo from '../assets/loggggooo.jpg'
import SwitchMode from './SwitchMode'
import SearchInput from './SearchInput'

 interface Props {
  onSearch : (searchText : string) => void
}

const Nav = ({onSearch} : Props) => {
  return (
   <HStack  padding='10px'>
    <Link to={''}>
    <Image src={logo} boxSize='80px'borderRadius={20} marginRight={5}/>
    </Link>
    <SearchInput onSearch={onSearch}/>
    <SwitchMode />
   </HStack>
  )
}

export default Nav