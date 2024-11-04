import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../components/Nav'

interface Props {
    onSearch : (searchText : string) => void
  }

const Layout = ({onSearch} : Props) => {

  return (
    <>
    <Nav onSearch={onSearch}/>
    <Outlet />
    </>
  )
}

export default Layout