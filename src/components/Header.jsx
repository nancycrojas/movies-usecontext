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

export const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Stack>
      <HStack flexDirection={{ base: 'column', md: 'row' }}>
        <Heading as="h1" size="xl" color="#FFDE2B" m={6}>
          Movies
        </Heading>
        <Spacer />
        <ButtonGroup>
          <Button
            colorScheme="red"
            variant="solid"
            mr={2}
            leftIcon={<StarIcon />}
            onClick={onOpen}
          >
            Favorites
          </Button>
          <Button color="white" variant="outline" mr={6}>
            Login
          </Button>
        </ButtonGroup>
      </HStack>
      <FavoritesDrawer isOpen={isOpen} onClose={onClose} />
    </Stack>
  )
}