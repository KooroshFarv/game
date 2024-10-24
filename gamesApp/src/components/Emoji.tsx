import React from 'react'
import bullsEye from '../assets/Emojis/bulls-eye.webp'
import thumsUp from '../assets/Emojis/thumbs-up.webp'
import meh from '../assets/Emojis/meh.webp'
import { Image, ImageProps } from '@chakra-ui/react'


interface Props {
    rating : number
}


const Emoji = ({rating} : Props) => {
    if(rating < 3) return null 


    const emojiMsp : {[key : number] : ImageProps} = {
        3 : {src : meh, alt: 'meh', boxSize : '20px'},
        4: {src : thumsUp, alt: 'recommended', boxSize : '20px'},
        5 : {src : bullsEye, alt: 'exeptional', boxSize : '25px'},
    }
  return (
    <Image {...emojiMsp[rating]} marginTop={3}/>
  )
}

export default Emoji