import React from 'react'
import { Card, CardBody, Skeleton ,ListItem, SkeletonCircle, SkeletonText, Box, HStack, List} from '@chakra-ui/react'

const GenreListSkeleton = () => {
    const skeletons = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]



    return(
        <List>
            {skeletons.map((skeleton) => (
                <ListItem key={skeleton} paddingY={'5px'}>
                    <HStack>
                        <SkeletonCircle  size={'35px'} borderRadius={'10px'}/>
                        <SkeletonText noOfLines={1} skeletonHeight="20px" width="55px" />
                    </HStack>
                </ListItem>
            ))}
        </List>
    )

}

export default GenreListSkeleton;