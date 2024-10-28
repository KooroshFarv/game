import React from 'react'
import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid} from 'react-icons/fa'
import {MdPhoneIphone} from 'react-icons/md'
import {SiNintendo} from 'react-icons/si'
import {BsGlobe} from 'react-icons/bs'
import { Platform } from '../hooks/usePlatfroms'
import { HStack, Icon, Text } from '@chakra-ui/react'
import { IconType } from 'react-icons/lib'


interface Props {
    platforms : Platform[]
   
}

const PlatformIconsList = ({platforms} : Props) => {
    const iconMap : {[ key : string ] : IconType} = {
        pc : FaWindows, 
        playstation : FaPlaystation,
        xbox : FaXbox,
        mac : FaApple,
        linux : FaLinux,
        android : FaAndroid,
        web : BsGlobe,
        ios : MdPhoneIphone
    };

    return (
    <HStack>
    {platforms.map((platform) => <Icon key={platform.id} as={iconMap[platform.slug]} color={'gray.500'}  marginY={'20px'}></Icon> )}
    </HStack>
    )
}

export default PlatformIconsList