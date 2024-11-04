import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../components/Nav'
import ErrorPage from './ErrorPage'
import { Box} from '@chakra-ui/react'

interface Props {
    onSearch : (searchText : string) => void
  }

const Layout = ({onSearch} : Props) => {

  return (
    <>
    <Nav onSearch={onSearch}/>
    <Box padding={10}>
    <Outlet />
    </Box>
    </>
  )
}

export default Layout