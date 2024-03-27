import { ChangeEvent, useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SimpleMdeReact from 'react-simplemde-editor'
import { useSelectTodo } from '../../hooks/useSelectTodo'
import { useAuth } from '../../hooks/useAuth'
import { createTodo } from '../../manageData'
import 'easymde/dist/easymde.min.css'
import { Colors } from '../../constants/colors'
import { errorMessages } from '../../constants/errorMessages'
import { ErrorNotification } from '../Mantine/ErrorNotification/ErrorNotification'
import { Stylizloader } from '../Mantine/Stylizloader/Stylizloader'
import { Box, Button, Center, Input, Text } from '@mantine/core'
import { notificationTitles } from '../../constants/notificationTitles'

export const Workspace = () => {
  const { isLoading, isError } = useAuth()
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
        title: notificationTitles.error,
        message: errorMessages.noDataForTodo,
      })

      return
    } else {
      createTodo({ title, description: value, date: new Date().toString() })
      onTodoAdd()
      navigate('/')
    }
  }

  if (isLoading || isError) {
    return <Stylizloader />
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
        <Button onClick={onSubmint} fullWidth color={Colors.green} radius={5}>
          Save
        </Button>
      </Center>
    </Box>
  )
}
