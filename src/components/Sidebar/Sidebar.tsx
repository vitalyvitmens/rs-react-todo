import { SearchBox } from '../SearchBox/SearchBox'
import { useSelectTodo } from '../../hooks/useSelectTodo'
import { ITodos } from '../../db'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDebounce } from '../../hooks/useDebounce'
import { Box, Container, Divider, Flex, Group, Text } from '@mantine/core'
import { DatePickerInput } from '@mantine/dates'

export const Sidebar = () => {
  const { selectTodo, getTodos, todos, isTodoAdded } = useSelectTodo()
  const [fetchedTodos, setFetchedTodos] = useState(todos)
  const [filteredTodos, setFilteredTodos] = useState(todos)
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()
  const onTodoSelect = (id: ITodos['id']) => {
    selectTodo(id)
    navigate('/')
  }

  const debouncedSearchTerm = useDebounce(searchTerm, 500)

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
    if (debouncedSearchTerm.length) {
      setFilteredTodos(
        fetchedTodos.filter(
          (i) =>
            i.description.toLocaleLowerCase().indexOf(debouncedSearchTerm) !==
            -1
        )
      )
    } else {
      setFilteredTodos(fetchedTodos)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearchTerm])

  return (
    <Container fluid w="30%">
      <SearchBox setSearchTerm={setSearchTerm} />
      <Group>
        {filteredTodos.map((todo) => {
          return (
              <Group w="100%"
                role="listitem"
                // disableGutters
                onClick={() => onTodoSelect(todo.id)}
                key={todo.id}
                style={{ cursor: 'pointer' }}
              >
                <Text w={700} fw={700}>
                  {todo.title}
                </Text>
                <DatePickerInput
                  radius={20}
                  defaultValue={new Date(todo.date)}
                />
                <Text
                  size="sm"
                  w={600}
                  c="#050"
                  style={{ display: 'inline', marginRight: '8px' }}
                >
                  {todo.date.slice(4, 24)}
                </Text>
                <Text size="sm">{todo.description}</Text>
                <Divider w="100%" color="#000" />
              </Group>
          )
        })}
      </Group>
    </Container>
  )
}
