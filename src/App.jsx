// import { useState } from 'react'
import { HStack, Stack } from '@chakra-ui/react'
import { Header } from './components/Header'
import { Movie } from './components/Movie'
import { movies } from './data/movies'

function App() {
  return (
    <Stack textAlign="center" bg="#00081D">
      <Header />
      <HStack justifyContent="center" flexWrap="wrap" gap={6}>
        {movies.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </HStack>
    </Stack>
  )
}

export default App
