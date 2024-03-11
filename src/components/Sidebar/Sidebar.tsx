import { SearchBox } from '../SearchBox/SearchBox'
import { useSelectTodo } from '../../hooks/useSelectTodo'
import { ITodos } from '../../db'
import { useEffect, useState } from 'react'
// import { formatDateLocale } from '@mantine/dates'
import { useNavigate } from 'react-router-dom'
import { useDebounce } from '../../hooks/useDebounce'
import { Container, Group, Text } from '@mantine/core'

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
    <Container
      // disableGutters
      style={{
        borderRight: '2px solid #E9E9EA',
        width: 'max-content',
        padding: '0 0 0 0px',
      }}
    >
      <SearchBox setSearchTerm={setSearchTerm} />
      <Group
        style={{
          padding: '10px',
          height: '700px',
          overflow: 'scroll',
          overflowX: 'hidden',
        }}
      >
        {filteredTodos.map((todo) => {
          return (
            <Group
              role="listitem"
              // disableGutters
              // alignItems="flex-start"
              onClick={() => onTodoSelect(todo.id)}
              key={todo.id}
              style={{
                borderBottom: '1px solid #E9E9EA',
                borderRadius: '5px',
                paddingLeft: '10px',
                paddingRight: '10px',
                cursor: 'pointer',
                ':hover': {
                  backgroundColor: '#E9E9EA',
                },
              }}
            >
              <Text w={700}>
                {`${todo.title.slice(0, 21)}${
                  todo.title.length > 15 ? '...' : ''
                }`}
              </Text>
              <Text
                size="sm"
                w={600}
                c="#050"
                style={{ display: 'inline', marginRight: '8px' }}
              >
                {todo.date}
              </Text>
              <Text size="sm">{`${todo.description.slice(0, 14)}...`}</Text>{' '}
            </Group>
          )
        })}
      </Group>
    </Container>
  )
}
