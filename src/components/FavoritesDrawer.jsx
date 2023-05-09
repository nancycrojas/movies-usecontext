import { useContext } from 'react'
import { FavoritesContext } from '../context/favorites/FavoritesContext'
import {
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  List,
  ListItem,
  Text,
} from '@chakra-ui/react'
import { Movie } from './Movie'
import { useLangContext } from '../context/lang/LangProvider'

export const FavoritesDrawer = ({ isOpen, onClose }) => {
  const { t } = useLangContext()
  const { favorites, clearFavorites, removeFavorite } =
    useContext(FavoritesContext)

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent bg="#00081D">
        <DrawerCloseButton color="white" />

        <DrawerHeader color="white">{t('yourFavorites')}</DrawerHeader>
        <DrawerBody>
          <Button mt={2} onClick={clearFavorites}>
            {t('clearFavorites')}
          </Button>
          {!favorites.length && (
            <Text mt={3} color="white">
              {t('noFavorites')}
            </Text>
          )}
          {favorites && (
            <List spacing={3}>
              {favorites.map((fav) => (
                <ListItem key={fav.id}>
                  <Movie movie={fav} />
                  <HStack justifyContent="center">
                    <Button
                      variant="outline"
                      color="white"
                      mb={4}
                      size="sm"
                      onClick={() => removeFavorite(fav.id)}
                    >
                      {t('remove')}
                    </Button>
                  </HStack>
                  <Divider />
                </ListItem>
              ))}
            </List>
          )}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}
