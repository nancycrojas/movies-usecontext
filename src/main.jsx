import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ChakraProvider } from '@chakra-ui/react'
import { FavoritesProvider } from './context/favorites/FavoritesProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FavoritesProvider>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </FavoritesProvider>
  </React.StrictMode>
)
