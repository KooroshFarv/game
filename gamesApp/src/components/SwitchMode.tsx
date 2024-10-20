
import {HStack, Switch, Text, useColorMode } from '@chakra-ui/react'


const SwitchMode = () => {
  const {toggleColorMode, colorMode} = useColorMode();
  return (
    <HStack>
        <Switch isChecked={colorMode === 'dark'} onChange={toggleColorMode} colorScheme='red'>
            <Text padding='20px'>Dark Mode</Text>
        </Switch>
    </HStack>

    
  )
}

export default SwitchMode