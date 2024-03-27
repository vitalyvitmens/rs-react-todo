import { lazy, LazyExoticComponent, FC } from 'react'
import { NoProps } from '../../types'

const NewTodo: LazyExoticComponent<FC<NoProps>> = lazy(() =>
  import('./NewTodo').then((module) => ({
    default: module.NewTodo,
  }))
)

export default NewTodo
