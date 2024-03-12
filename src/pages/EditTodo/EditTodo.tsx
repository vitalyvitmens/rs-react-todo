import { ChangeEvent, useCallback, useEffect, useState } from 'react'
import SimpleMdeReact from 'react-simplemde-editor'
import { Box, Container, Input, Text } from '@mantine/core'
import { useParams } from 'react-router-dom'
import { useSelectTodo } from '../../hooks/useSelectTodo'

export const EditTodo = () => {
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

  useEffect(() => {
    selectTodo(Number(todoId))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
    const id = setTimeout(() => {
      onTodoUpdate({
        id: Number(todoId),
        title,
        description: value,
        date: new Date().toString(),
      })
      onTodoAdd()
    }, 1000)

    return () => {
      clearTimeout(id)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, title])

  return (
    <Box>
      <Box
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          height: '150px',
        }}
      >
        <Text mb={2} variant="h5" style={{ textAlign: 'center' }}>
          Новая заметка2
        </Text>
        <Input.Wrapper label="Заголовок3">
          <Input
            required
            id="todo-title"
            name="title"
            value={title}
            onChange={onTitleChange}
          />
        </Input.Wrapper>
      </Box>
      <SimpleMdeReact id="todo-textarea" value={value} onChange={onChange} />
    </Box>
  )
}
