import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { isRouteErrorResponse, useRouteError } from 'react-router-dom'
import Nav from '../components/Nav';

const ErrorPage = () => {
   const error = useRouteError();
  return (
    <>
    <Nav onSearch={function (searchText: string): void {
              throw new Error('Function not implemented.');
          } } />
          <Box padding={10}>
        <Heading>Oops</Heading>
        <Text>{isRouteErrorResponse(error) ? 'This page does not exist' : 'Unexpecter error occured!'}</Text>
          </Box>
    </>
  )
}

export default ErrorPage