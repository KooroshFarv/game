
import {HStack, Switch, Text, useColorMode, Box } from '@chakra-ui/react'
import { useState, useEffect } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi'; 



const SwitchMode = () => {
  const {toggleColorMode, colorMode} = useColorMode();
  const [isChecked, setIschecked] = useState(colorMode === 'dark')


  useEffect(() => {
    setIschecked(colorMode === 'dark');
  }, [colorMode]);


  function handleToggle() {
    setIschecked(prev => !prev);
    toggleColorMode();


  }
  return (

    <HStack>
        {/* <Switch isChecked={colorMode === 'dark'} onChange={toggleColorMode} colorScheme='red'>
            <Text whiteSpace={'nowrap'} padding='20px'>YO</Text>
        </Switch> */}
        <Text>{isChecked ? < FiMoon /> : < FiSun />}</Text>
        <Box as='label' 
        display='flex' 
        position='relative' 
        alignItems='center' 
        borderRadius='30px'
        width="60px"
        height="30px"
        bg={isChecked ? 'black' : 'white'}
        border="2px solid gray"
        cursor="pointer"
               transition="background-color 0.3s ease, left 0.3s ease"
        onClick={handleToggle}
        >
          <Box 
           as="span"
           position="absolute"
           top="1px"
           left={isChecked ? '32px' : '1px'}
           width="24px"
           height="24px"
           borderRadius="50%"
           bg={isChecked ? 'white' : 'black'}
             transition="left 0.3s ease, background-color 0.3s ease"
           />
           </Box>
    </HStack>
  )
}

export default SwitchMode