import { Box, Button, Container, Input, Text } from '@mantine/core'
import { ChangeEvent, useCallback, useEffect, useState } from 'react'
import SimpleMdeReact from 'react-simplemde-editor'
import 'easymde/dist/easymde.min.css'
import { insertTodo } from '../../manageData'
import { useSelectTodo } from '../../hooks/useSelectTodo'

const Workspace = () => {
  const [title, setTitle] = useState('Новая заметка')
  const [value, setValue] = useState('')
  const { onTodoAdd } = useSelectTodo()

  useEffect(() => {}, [])

  const onChange = useCallback((value: string) => {
    setValue(value)
  }, [])

  const onTitleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }, [])

  const onSubmint = () => {
    insertTodo({ title, description: value, date: new Date().toString() })
    onTodoAdd()
  }

  return (
    <Container style={{ overflow: 'hidden' }}>
      <Box style={{ padding: '0 10px 20px 10px' }}>
        <Box
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            height: '150px',
          }}
        >
          <Text mb={2} variant="h5" style={{ textAlign: 'center' }}>
            Новая заметка
          </Text>
          <Input.Wrapper label="Заголовок">
            <Input
              required
              id="outlined-required"
              name="title"
              value={title}
              onChange={onTitleChange}
            />
          </Input.Wrapper>
        </Box>
        <SimpleMdeReact value={value} onChange={onChange} />
        <Button onClick={onSubmint} fullWidth variant="outlined" color="note">
          Save
        </Button>
      </Box>
    </Container>
  )
}

export default Workspace
