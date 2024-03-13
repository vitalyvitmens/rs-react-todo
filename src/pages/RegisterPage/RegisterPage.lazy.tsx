import { lazy, LazyExoticComponent, FC } from 'react'
import { NoProps } from '../../types'

const RegisterPage: LazyExoticComponent<FC<NoProps>> = lazy(() =>
  import('./RegisterPage').then((module) => ({
    default: module.RegisterPage,
  }))
)

export default RegisterPage
