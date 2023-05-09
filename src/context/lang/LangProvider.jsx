import { useContext, useState } from 'react'
import { LangContext } from './LangContext'

const languages = {
  es: {
    login: 'Iniciar sesión',
    logout: 'Cerrar sesión',
    email: 'Correo Electrónico',
    password: 'Contraseña',
    required: 'Este campo es requerido',
    close: 'Cerrar',
    yourFavorites: 'Tus favoritos',
    clearFavorites: 'Limpiar Favoritos',
    noFavorites: 'No tenes favoritos',
    remove: 'Eliminar',
    favorites: 'Favoritas',
    movies: 'Películas',
  },
  en: {
    login: 'Login',
    logout: 'Logout',
    email: 'Email',
    password: 'Password',
    required: 'This field is required',
    close: 'Close',
    yourFavorites: 'Your Favorites',
    clearFavorites: 'Clear Favorites',
    noFavorites: 'No favorites',
    remove: 'Remove',
    favorites: 'Favorites',
    movies: 'Movies',
  },
}

export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState('en')

  const changeLang = (language) => {
    setLang(language)
  }

  // translate
  const t = (text) => {
    const langMain = languages[lang]

    return langMain[text] || text
  }
  return (
    <LangContext.Provider value={{ lang, changeLang, t }}>
      {children}
    </LangContext.Provider>
  )
}

export const useLangContext = () => useContext(LangContext)
