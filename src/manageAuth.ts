import db, { IUsers } from './db'
import { compare } from './utils/compare'
import { ErrorNotification } from './components/Mantine/ErrorNotification/ErrorNotification'
import { DefaultNotification } from './components/Mantine/DefaultNotification/DefaultNotification'
import { notificationTitles } from './constants/notificationTitles'
import { successMessages } from './constants/successMessages'
import { errorMessages } from './constants/errorMessages'

export const registerUser = async (
  { username, password }: IUsers,
  callback: () => void
) => {
  try {
    const newUser = await db.users.get({ username })
    if (newUser) {
      ErrorNotification({
        title: notificationTitles.error,
        message: errorMessages.userExists(username),
      })
      return
    }

    await db.users.add({ username, password })
    DefaultNotification({
      title: notificationTitles.success,
      message: successMessages.userRegistered(username),
    })

    callback()
  } catch (error) {
    alert(error)
  }
}

export const loginUser = async (
  { username, password }: IUsers,
  callback: () => void
) => {
  try {
    const user = await db.users.where('username').equals(username).first()
    if (!user) {
      ErrorNotification({
        title: notificationTitles.error,
        message: errorMessages.userNotFound(username),
      })
      return
    }
    const isPasswordMatch = compare(password, user.password)
    if (!isPasswordMatch) {
      ErrorNotification({
        title: notificationTitles.error,
        message: errorMessages.invalidPassword,
      })
      return
    }

    await db.users.update(user, { loggedIn: true })
    DefaultNotification({
      title: notificationTitles.success,
      message: successMessages.userLoggedIn(username),
    })

    callback()
  } catch (error) {
    if (error instanceof Error) {
      ErrorNotification({
        title: notificationTitles.error,
        message: error.message,
      })
    } else {
      ErrorNotification({
        title: notificationTitles.error,
        message: errorMessages.unknownError,
      })
    }
  }
}

export const getUser = async (user: IUsers) => {
  try {
    const data = await db.users.get(user)
    return data
  } catch (error) {
    console.log('Cannot get data:', error)
  }
}
