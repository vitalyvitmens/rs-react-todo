import db, { IUsers } from './db'
import { compare } from './utils/compare'
import { ErrorNotification } from './components/Mantine/ErrorNotification/ErrorNotification'
import { DefaultNotification } from './components/Mantine/DefaultNotification/DefaultNotification'

export const registerUser = async (
  { username, password }: IUsers,
  callback: () => void
) => {
  try {
    const newUser = await db.users.get({ username })
    if (newUser) {
      ErrorNotification({
        title: 'Error',
        message: `Пользователь ${username} уже существует. Выберите другой username, если это Вы пожалуйста залогиньтесь`,
      })
      return
    }

    await db.users.add({ username, password })
    DefaultNotification({
      title: 'Success',
      message: `Пользователь ${username} успешно зарегистрировался`,
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
        title: 'Error',
        message: `Пользователь ${username} не найден`,
      })
      return
    }
    const isPasswordMatch = compare(password, user.password)
    if (!isPasswordMatch) {
      ErrorNotification({
        title: 'Error',
        message: 'Неверный пароль',
      })
      return
    }

    await db.users.update(user, { loggedIn: true })
    DefaultNotification({
      title: 'Success',
      message: `Пользователь ${username} успешно вошел в систему`,
    })

    callback()
  } catch (error) {
    if (error instanceof Error) {
      ErrorNotification({
        title: 'Error',
        message: error.message,
      })
    } else {
      ErrorNotification({
        title: 'Error',
        message: 'Произошла неизвестная ошибка',
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
