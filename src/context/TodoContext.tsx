import { createContext, useState } from 'react'
import { ITodos } from '../db'
import { readTodo, readTodos, updateTodo } from '../manageData'
import { IProviderProps } from './AuthContext'

interface TodosContextType {
  todo: ITodos
  todos: ITodos[]
  isTodoAdded: number
  isLoading: boolean
  isSuccess: boolean
  isError: boolean
  isTodoUpdating: boolean
  isTodoUpdated: boolean
  selectTodo: (id: ITodos['id']) => void
  getTodos: () => void
  onTodoAdd: () => void
  onTodoDelete: () => void
  onTodoUpdate: ({ id, title, description }: ITodos) => void
}

export const TodoContext = createContext<TodosContextType>({
  todo: {
    id: 1,
    title: 'React TS',
    date: '10.03.2024',
    description: 'Frontend',
  },
  todos: [],
  isTodoAdded: 0,
  isLoading: false,
  isSuccess: false,
  isError: false,
  isTodoUpdating: false,
  isTodoUpdated: false,
  selectTodo: () => {},
  getTodos: () => [],
  onTodoAdd: () => 0,
  onTodoDelete: () => 0,
  onTodoUpdate: () => 0,
})

export const TodoProvider = ({ children }: IProviderProps) => {
  const [todo, setTodo] = useState<ITodos>(
    () => JSON.parse(localStorage.getItem('todo-rs-react-todo') || '{}') || null
  )
  const [todos, setTodos] = useState<ITodos[]>([])
  const [isTodoAdded, setIsTodoAdded] = useState(0)

  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isError, setIsError] = useState(false)

  const [isTodosLoading, setIsTodosLoading] = useState(false)
  const [isTodosSuccess, setIsTodosSuccess] = useState(false)
  const [isTodosError, setIsTodosError] = useState(false)

  const [isTodoUpdating, setIsTodoUpdating] = useState(false)
  const [isTodoUpdated, setIsTodoUpdated] = useState(false)
  const [isTodoUpdateError, setIsTodoUpdateError] = useState(false)

  const selectTodo = async (todoId: ITodos['id']) => {
    setIsLoading(true)
    const todo = await readTodo(todoId)
    if (typeof todo === 'undefined') {
      setIsLoading(false)
      setIsError(true)
    } else {
      setIsSuccess(true)
      setIsError(true)
      localStorage.setItem('todo-rs-react-todo', JSON.stringify(todo))
      setIsLoading(false)
      setTodo(todo)
    }
  }

  const getTodos = async () => {
    setIsTodosLoading(true)
    const todos = await readTodos()
    if (typeof todo === 'undefined') {
      setIsTodosLoading(false)
      setIsTodosError(true)
    } else {
      setIsTodosSuccess(true)
      setIsTodosError(true)
      setIsTodosLoading(false)
      setTodos(todos)
    }
  }

  const onTodoUpdate = async ({ id, title, description }: ITodos) => {
    setIsTodoUpdating(true)
    try {
      await updateTodo({
        id,
        title,
        description,
        date: new Date().toString(),
      })
      setIsTodoUpdating(false)
      setIsTodoUpdated(true)
    } catch (error) {
      setIsTodoUpdating(false)
      setIsTodoUpdateError(true)
    }
  }

  const onTodoAdd = () => {
    setIsTodoAdded((prev) => prev + 1)
  }
  const onTodoDelete = () => {
    setIsTodoAdded((prev) => prev - 1)
  }

  const value = {
    todo,
    isTodoAdded,
    onTodoAdd,
    onTodoDelete,
    todos,
    isLoading,
    isSuccess,
    isError,
    isTodosLoading,
    isTodosSuccess,
    isTodosError,
    isTodoUpdating,
    isTodoUpdated,
    isTodoUpdateError,
    selectTodo,
    getTodos,
    onTodoUpdate,
  }

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
}
