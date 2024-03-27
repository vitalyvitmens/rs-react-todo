import { ReactNode, createContext, useState } from 'react'
import { IUser } from '../db'
import { getUser } from '../manageAuth'
import { DefaultNotification } from '../components/Mantine/DefaultNotification/DefaultNotification'
import { notificationTitles } from '../constants/notificationTitles'
import { successMessages } from '../constants/successMessages'

interface AuthContextType {
  user: IUser | undefined
  isLoading: boolean
  isError: boolean
  logIn: (newUser: IUser, callback: () => void) => void
  logOut: (callback: () => void) => void
}

export const AuthContext = createContext<AuthContextType>({
  user: undefined,
  isLoading: false,
  isError: false,
  logIn() {},
  logOut() {},
})

export interface IProviderProps {
  children?: ReactNode
}

export const AuthProvider = ({ children }: IProviderProps) => {
  const [user, setUser] = useState<IUser | undefined>(
    () => JSON.parse(localStorage.getItem('user-rs-react-todo') || '{}') || null
  )
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  const logIn = async (newUser: IUser, callback: () => void) => {
    setIsLoading(true)
    const user = await getUser(newUser)
    if (user === undefined) {
      setIsLoading(false)
      setIsError(true)
    } else {
      localStorage.setItem('user-rs-react-todo', JSON.stringify(user))
      setIsLoading(false)
      setUser(user)
      callback()
    }
  }

  const logOut = (callback: () => void) => {
    setUser(undefined)
    localStorage.removeItem('user-rs-react-todo')
    DefaultNotification({
      title: notificationTitles.success,
      message: successMessages.userLoggedOut(user?.username),
    })

    callback()
  }

  const value = {
    user,
    isLoading,
    isError,
    logIn,
    logOut,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
