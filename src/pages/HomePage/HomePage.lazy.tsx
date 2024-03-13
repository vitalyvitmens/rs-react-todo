import { lazy, LazyExoticComponent, FC } from 'react'
import { NoProps } from '../../types'

const HomePage: LazyExoticComponent<FC<NoProps>> = lazy(() =>
  import('./HomePage').then((module) => ({
    default: module.HomePage,
  }))
)

export default HomePage
