import { FormValues } from '../types'

export const validateUsername = (value: string) => {
  return value.length < 2 ? 'Username must have at least 2 letters' : null
}

export const validatePassword = (value: string) => {
  return value.length < 6 ? 'Password must have at least 6 letters' : null
}

export const validateConfirmPassword = (value: string, values: FormValues) => {
  return value !== values.password ? 'Passwords did not match' : null
}
