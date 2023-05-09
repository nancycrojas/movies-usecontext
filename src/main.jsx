import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ChakraProvider } from '@chakra-ui/react'
import { FavoritesProvider } from './context/favorites/FavoritesProvider'
import { UserProvider } from './context/user/UserProvider'
import { LangProvider } from './context/lang/LangProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <UserProvider>
        <LangProvider>
          <FavoritesProvider>
            <App />
          </FavoritesProvider>
        </LangProvider>
      </UserProvider>
    </ChakraProvider>
  </React.StrictMode>
)
