import React, { useState } from 'react'

import { FavoritesContext } from './FavoritesContext'

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([])

  const addFavorite = (movie) => {
    const existMovie = favorites.some((fav) => fav.id === movie.id)
    if (!existMovie) {
      setFavorites([...favorites, movie])
    }
  }

  const removeFavorite = (id) => {
    setFavorites(favorites.filter((fav) => fav.id !== id))
  }

  const clearFavorites = () => {
    setFavorites([])
  }

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite, clearFavorites }}
    >
      {children}
    </FavoritesContext.Provider>
  )
}
