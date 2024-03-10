import { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'

export const useSelectTodo = () => {
  return useContext(TodoContext)
}
