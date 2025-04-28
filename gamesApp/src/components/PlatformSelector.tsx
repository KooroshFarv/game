import { BsChevronDown } from 'react-icons/bs'
import usePlatforms, { Platform } from '../hooks/usePlatfroms'
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/menu'
import { Button } from '@chakra-ui/react'

interface Props {
  onSelectPlatform: (platform: Platform) => void
  selectedPlatformId?: number
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatformId }: Props) => {
  const { data, error } = usePlatforms()
  const selectedPlatform = data?.results.find(p => p.id === selectedPlatformId)

  if (error) return null

  return (
    <Menu>
    <MenuButton as={Button}>
      {selectedPlatform?.name || "Platforms"} <BsChevronDown style={{ display: 'inline', marginLeft: '8px' }} />
    </MenuButton>
    <MenuList>
      {data?.results.map((platform: Platform) => (
        <MenuItem
          key={platform.id}
          onClick={() => onSelectPlatform(platform)}
        >
          {platform.name}
        </MenuItem>
      ))}
    </MenuList>
  </Menu>
  
  )
}

export default PlatformSelector
