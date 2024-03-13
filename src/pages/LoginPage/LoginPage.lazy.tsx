import { lazy, LazyExoticComponent, FC } from 'react'
import { NoProps } from '../../types'

const LoginPage: LazyExoticComponent<FC<NoProps>> = lazy(() =>
  import('./LoginPage').then((module) => ({
    default: module.LoginPage,
  }))
)

export default LoginPage
