import { ChangeEvent, useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SimpleMdeReact from 'react-simplemde-editor'
import { useSelectTodo } from '../../hooks/useSelectTodo'
import { createTodo } from '../../manageData'
import { Box, Button, Center, Input, Text } from '@mantine/core'
import 'easymde/dist/easymde.min.css'
import { ErrorNotification } from '../MantineNotifications/components/ErrorNotification/ErrorNotification'

export const Workspace = () => {
  const [title, setTitle] = useState('')
  const [value, setValue] = useState('')
  const { onTodoAdd } = useSelectTodo()
  const navigate = useNavigate()

  useEffect(() => {}, [])

  const onChange = useCallback((value: string) => {
    setValue(value)
  }, [])

  const onTitleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }, [])

  const onSubmint = () => {
    if (!title) {
      ErrorNotification({
        title: 'Error',
        message: `Нет данных для создания Todo, заполните хотя бы заголовок`,
      })

      return
    } else {
      createTodo({ title, description: value, date: new Date().toString() })
      onTodoAdd()
      navigate('/')
    }
  }

  return (
    <Box p={10}>
      <Center>
        <Text size="md" fw={700}>
          Новая заметка
        </Text>
      </Center>
      <Input.Wrapper label="Заголовок">
        <Input
          required
          id="new-todo-title"
          name="todoTitle"
          placeholder="Новая заметка"
          value={title}
          onChange={onTitleChange}
        />
      </Input.Wrapper>
      <SimpleMdeReact
        style={{ fontSize: '0.8rem' }}
        id="new-todo-textarea"
        value={value}
        onChange={onChange}
      />
      <Center>
        <Button onClick={onSubmint} fullWidth color="#008000" radius={5}>
          Save
        </Button>
      </Center>
    </Box>
  )
}
