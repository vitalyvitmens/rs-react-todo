import { SearchInput } from '../SearchInput/SearchInput'
import { useSelectTodo } from '../../hooks/useSelectTodo'
import { ITodos } from '../../db'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDebounce } from '../../hooks/useDebounce'
import { Colors } from '../../constants/colors'
import { Box, Divider, Group, Text } from '@mantine/core'

export const Sidebar = () => {
  const { selectTodo, getTodos, todos, isTodoAdded } = useSelectTodo()
  const [fetchedTodos, setFetchedTodos] = useState(todos)
  const [filteredTodos, setFilteredTodos] = useState(todos)
  const [searchInput, setSearchInput] = useState('')
  const navigate = useNavigate()
  const onTodoSelect = (id: ITodos['id']) => {
    selectTodo(id)
    navigate('/')
  }

  const debouncedSearchInput = useDebounce(searchInput, 500)

  useEffect(() => {
    setFetchedTodos(todos)
    setFilteredTodos(todos)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getTodos])

  useEffect(() => {
    getTodos()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isTodoAdded])

  useEffect(() => {
    if (debouncedSearchInput.length) {
      setFilteredTodos(
        fetchedTodos.filter(
          (i) =>
            i.description.toLocaleLowerCase().indexOf(debouncedSearchInput) !==
            -1
        )
      )
    } else {
      setFilteredTodos(fetchedTodos)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearchInput])

  return (
    <Box w="38%" style={{ borderRight: `2px solid ${Colors.primary}` }}>
      <SearchInput setSearchInput={setSearchInput} />
      {filteredTodos.map((todo) => {
        return (
          <Group
            role="listitem"
            w="100%"
            onClick={() => onTodoSelect(todo.id)}
            key={todo.id}
            style={{ cursor: 'pointer' }}
          >
            <Text size="md" fw={700} pl={10} truncate="end">
              {todo.title}
            </Text>
            <Text size="xs" w={600} c={Colors.success}>
              {todo.date.slice(4, 24)}
            </Text>
            <Text size="sm" truncate="end">
              {todo.description}
            </Text>
            <Divider w="97%" pb={5} color={Colors.black} />
          </Group>
        )
      })}
    </Box>
  )
}
