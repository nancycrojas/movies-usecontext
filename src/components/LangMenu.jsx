import { useContext } from 'react'
import { LangContext } from '../context/lang/LangContext'
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'

export const LangMenu = () => {
  const { lang, changeLang } = useContext(LangContext)

  return (
    <Menu>
      <MenuButton mr={2} as={Button} rightIcon={<ChevronDownIcon />}>
        {lang === 'es' ? 'Español' : 'English'}
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => changeLang('en')}>English</MenuItem>
        <MenuItem onClick={() => changeLang('es')}>Español</MenuItem>
      </MenuList>
    </Menu>
  )
}
