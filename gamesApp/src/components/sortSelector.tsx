import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'

interface Props {
    onSelectSortOrder : (sortOrder : string) => void;
    sortOrder : string
}

const sortSelector = ({onSelectSortOrder, sortOrder} : Props) => {
    const sortorders = [
        {value: '', label : 'Relevance'},
        {value: '-added', label : 'Date added'}, 
        {value: 'name', label : 'Name'},
        {value: '-released', label : 'Release date'},
        {value: '-metacritic', label : 'Popularity'},
        {value: '-rating', label : 'Average Rate'},
    ]

    const currentSortOrder = sortorders.find(order => order.value === sortOrder)
  return (
    <Menu> 
    <MenuButton as={Button} rightIcon={<BsChevronDown />}>
    Order by : {currentSortOrder?.label || 'Relevance'}
    </MenuButton>
    <MenuList>
       {sortorders.map((order) =>(
        <MenuItem onClick={() => onSelectSortOrder(order.value)} key={order.value} value={order.value}>
            {order.label}
        </MenuItem>
    ))}
    </MenuList>
</Menu>
  )
}

export default sortSelector