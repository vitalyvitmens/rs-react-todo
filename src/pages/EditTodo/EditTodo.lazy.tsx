import { lazy, LazyExoticComponent, FC } from 'react'
import { NoProps } from '../../types'

const EditTodo: LazyExoticComponent<FC<NoProps>> = lazy(() =>
  import('./EditTodo').then((module) => ({
    default: module.EditTodo,
  }))
)

export default EditTodo
