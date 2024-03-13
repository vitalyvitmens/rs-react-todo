import { lazy, LazyExoticComponent, FC } from 'react'
import { NoProps } from '../../types'

const TestPage: LazyExoticComponent<FC<NoProps>> = lazy(() =>
  import('./TestPage').then((module) => ({
    default: module.TestPage,
  }))
)

export default TestPage
