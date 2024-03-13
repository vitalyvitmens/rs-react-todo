import { lazy, LazyExoticComponent, FC } from 'react'
import { NoProps } from '../../types'

const Todo: LazyExoticComponent<FC<NoProps>> = lazy(() =>
  import('./Todo').then((module) => ({
    default: module.Todo,
  }))
)

export default Todo
