import { ChangeEvent, useCallback, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import SimpleMdeReact from 'react-simplemde-editor'
import { useSelectTodo } from '../../hooks/useSelectTodo'
import { useAuth } from '../../hooks/useAuth'
import { Colors } from '../../constants/colors'
import { Stylizloader } from '../../components/Mantine/Stylizloader/Stylizloader'
import { Box, Button, Center, Input, Text } from '@mantine/core'

export const EditTodo = () => {
  const { isLoading, isError } = useAuth()
  const { todoId } = useParams()
  const {
    selectTodo,
    todo: fetchedTodo,
    onTodoUpdate,
    isTodoUpdated,
    onTodoAdd,
  } = useSelectTodo()
  const [title, setTitle] = useState<string>(fetchedTodo?.title)
  const [value, setValue] = useState<string>(fetchedTodo?.description)
  const navigate = useNavigate()

  useEffect(() => {
    selectTodo(Number(todoId))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isTodoUpdated])

  const onChange = useCallback((value: string) => {
    setValue(value)
  }, [])

  const onTitleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }, [])

  useEffect(() => {
    if (todoId === undefined || isNaN(Number(todoId))) {
      navigate('*')
    } else {
      const id = setTimeout(() => {
        onTodoUpdate({
          id: Number(todoId),
          title,
          description: value,
          date: new Date().toString(),
        })
        onTodoAdd()
      }, 2000)

      return () => {
        clearTimeout(id)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, title])

  const handleToMainPage = () => navigate('/')

  if (isLoading || isError) {
    return <Stylizloader />
  }

  return (
    <Box p={10}>
      <Center>
        <Text size="md" fw={700}>
          Редактирование заметки
        </Text>
      </Center>
      <Input.Wrapper label="Заголовок">
        <Input
          required
          id="todo-title"
          name="title"
          value={title}
          onChange={onTitleChange}
        />
      </Input.Wrapper>
      <SimpleMdeReact
        style={{ fontSize: '0.8rem' }}
        id="todo-textarea"
        value={value}
        onChange={onChange}
      />
      <Center>
        <Button
          onClick={handleToMainPage}
          fullWidth
          color={Colors.green}
          radius={5}
        >
          To Home Page
        </Button>
      </Center>
    </Box>
  )
}
