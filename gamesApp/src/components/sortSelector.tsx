import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/menu'
import { Button } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'

interface Props {
  onSelectSortOrder: (sortOrder: string) => void
  sortOrder: string
}

const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
  const sortOrders = [
    { value: '', label: 'Relevance' },
    { value: '-added', label: 'Date added' },
    { value: 'name', label: 'Name' },
    { value: '-released', label: 'Release date' },
    { value: '-metacritic', label: 'Popularity' },
    { value: '-rating', label: 'Average Rate' },
  ]

  const currentSortOrder = sortOrders.find(order => order.value === sortOrder)

  return (
    <Menu>
      <MenuButton as={Button}>
        Order by: {currentSortOrder?.label || 'Relevance'}
        <BsChevronDown style={{ display: 'inline', marginLeft: '8px' }} />
      </MenuButton>
      <MenuList>
        {sortOrders.map(order => (
          <MenuItem
            key={order.value}
            onClick={() => onSelectSortOrder(order.value)}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}

export default SortSelector
