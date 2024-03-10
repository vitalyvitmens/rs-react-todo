import db, { IUsers } from './db'
import { compare } from './utils/compare'

export const registerUser = async (
  { username, password }: IUsers,
  callback: () => void
) => {
  try {
    const newUser = await db.users.get({ username })
    if (newUser) {
      throw new Error(`User ${username} already existed!`)
    }
    await db.users.add({ username, password })
    console.log(`User ${username} registered successfully!`)
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
    const user = await db.users
      .where('[username+password]')
      .equals([username, password])
      .first()
    if (!user) {
      throw new Error(`User ${username} not found!`)
    }
    const isPasswordMatch = compare(password, user.password)
    if (!isPasswordMatch) {
      throw new Error('Wrong password!')
    }
    await db.users.update(user, { loggedIn: true })
    console.log(`User ${username} logged in successfully!`)
    callback()
  } catch (error) {
    alert(error)
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
