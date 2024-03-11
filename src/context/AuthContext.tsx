import { ReactNode, createContext, useState } from 'react'
import { IUsers } from '../db'
import { getUser } from '../manageAuth'

interface AuthContextType {
  user: IUsers | undefined
  isLoading: boolean
  isSuccess: boolean
  isError: boolean
  logIn: (newUser: IUsers, callback: () => void) => void
  logOut: (callback: () => void) => void
}

export const AuthContext = createContext<AuthContextType>({
  user: undefined,
  isLoading: false,
  isSuccess: false,
  isError: false,
  logIn() {},
  logOut() {},
})

export interface IProviderProps {
  children?: ReactNode
}

export const AuthProvider = ({ children }: IProviderProps) => {
  const [user, setUser] = useState<IUsers | undefined>(
    () => JSON.parse(localStorage.getItem('user-rs-react-todo') || '{}') || null
  )
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isError, setIsError] = useState(false)

  const logIn = async (newUser: IUsers, callback: () => void) => {
    setIsLoading(true)
    const user = await getUser(newUser)
    if (typeof user === 'undefined') {
      setIsLoading(false)
      setIsError(true)
    } else {
      setIsSuccess(true)
      localStorage.setItem('user-rs-react-todo', JSON.stringify(user))
      setIsLoading(false)
      setUser(user)
      callback()
    }
  }
  const logOut = (callback: () => void) => {
    setUser(undefined)
    localStorage.removeItem('user-rs-react-todo')
    callback()
  }

  const value = {
    user,
    isLoading,
    isSuccess,
    isError,
    logIn,
    logOut,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
