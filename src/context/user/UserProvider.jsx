import { useState } from 'react'

import { UserContext } from './UserContext'

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  const login = (data) => {
    setUser(data)
  }

  const logout = () => {
    setUser(null)
  }

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  )
}
