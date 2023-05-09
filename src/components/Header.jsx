import {
  Button,
  ButtonGroup,
  HStack,
  Heading,
  Spacer,
  Stack,
  useDisclosure,
} from '@chakra-ui/react'
import { FavoritesDrawer } from './FavoritesDrawer'
import { StarIcon } from '@chakra-ui/icons'
import { LoginModal } from './auth/LoginModal'
import { useContext } from 'react'
import { UserContext } from '../context/user/UserContext'
import { LangMenu } from './LangMenu'
import { useLangContext } from '../context/lang/LangProvider'

export const Header = () => {
  const { t } = useLangContext()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { user, logout } = useContext(UserContext)

  return (
    <Stack>
      <HStack flexDirection={{ base: 'column', md: 'row' }}>
        <Heading as="h1" size="xl" color="#FFDE2B" m={6}>
          {t('movies')}
        </Heading>
        <Spacer />
        <ButtonGroup flexWrap="wrap" justifyContent="center" gap={2}>
          <Button
            colorScheme="red"
            variant="solid"
            mr={2}
            leftIcon={<StarIcon />}
            onClick={onOpen}
          >
            {t('favorites')}
          </Button>
          {user ? (
            <Button onClick={logout}>{t('logout')}</Button>
          ) : (
            <LoginModal />
          )}
          <LangMenu />
        </ButtonGroup>
      </HStack>
      <FavoritesDrawer isOpen={isOpen} onClose={onClose} />
    </Stack>
  )
}
