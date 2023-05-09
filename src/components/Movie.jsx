import {
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
  IconButton,
} from '@chakra-ui/react'
import { useContext } from 'react'
import { StarIcon } from '@chakra-ui/icons'
import { FavoritesContext } from '../context/favorites/FavoritesContext'

export const Movie = ({ movie }) => {
  const { favorites, addFavorite } = useContext(FavoritesContext)

  const isFavorite = favorites.some((fav) => fav.id === movie.id)

  return (
    <Stack>
      <Card maxW="sm" bg="#00081D">
        <CardBody>
          <Image src={movie.img} alt={movie.name} borderRadius="lg" />
          <Stack mt="6" spacing="3">
            <Heading color="white" size="md">
              {movie.name}
            </Heading>
            <Text color="white">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
              fugiat alias ducimus aut, dicta quasi modi ex sapiente natus illo.
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter
          justifyContent="flex-end"
          alignItems="center"
          gap={3}
          color="white"
        >
          <IconButton
            variant="outline"
            colorScheme={isFavorite ? 'yellow' : 'gray'}
            size="md"
            icon={<StarIcon />}
            onClick={() => addFavorite(movie)}
          />
        </CardFooter>
      </Card>
    </Stack>
  )
}
