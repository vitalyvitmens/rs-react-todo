import { useEffect, useMemo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IconTrash, IconEdit } from '@tabler/icons-react'
import { useSelectTodo } from '../../hooks/useSelectTodo'
import { deleteTodo } from '../../manageData'
import { ITodos } from '../../db'
import { marked } from 'marked'
import {
  Box,
  Button,
  Loader,
  Container,
  Modal,
  Text,
  TypographyStylesProvider,
  Group,
  Center,
  Divider,
} from '@mantine/core'

export const Todo = () => {
  const [todo, setTodo] = useState<ITodos>()
  const {
    todo: selectedTodo,
    todos,
    isLoading,
    onTodoDelete,
    selectTodo,
  } = useSelectTodo()
  const isMobile = useMemo(
    () => window.matchMedia('(max-width: 768px)').matches,
    []
  )
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const navigate = useNavigate()

  useEffect(() => {
    setTodo(selectedTodo)
  }, [selectedTodo])

  const onDeleteTodo = () => {
    deleteTodo(selectedTodo.id!)
    onTodoDelete()
    selectTodo(todos.length)
    setTodo(todos[todos.length - 2])
    handleClose()
  }

  const [htmlText, setHtmlText] = useState<string | null>(null)

  useEffect(() => {
    const updateHtmlText = async () => {
      if (todo?.description) {
        const rawMarkup = await marked.parse(todo.description)
        setHtmlText(rawMarkup)
      }
    }
    updateHtmlText()
  }, [todo?.description])

  const onEditTodo = () => navigate(`/${todo?.id}`)

  if (isLoading || !todo) {
    return (
      <Center>
        <Loader mt="50%" color="#0000FF" size={77} />
      </Center>
    )
  }

  return (
    <Container w="100%" pt={6}>
      <Group justify="space-around" mb={10}>
        <IconTrash
          style={{ color: '#FF0000', cursor: 'pointer' }}
          onClick={handleOpen}
        />
        <Link
          style={{
            fontSize: isMobile ? '0.5rem' : '0.75rem',
            fontWeight: '700',
            border: '2px solid #008000',
            padding: '2px 5px',
            borderRadius: '5px',
            color: '#008000',
          }}
          to="/new"
        >
          Добавить заметку
        </Link>
        <IconEdit
          style={{ color: '#FFC94C', cursor: 'pointer' }}
          onClick={onEditTodo}
        />
        <Divider size={2} w="100%" color="#FFC94C" />
      </Group>
      <Center>
        <Box>
          <Text size="md" fw={700} pl={10} pb={10}>
            {todo?.title}
          </Text>
          <Text size="xs" pb={10} c="#008000">
            {todo?.date?.slice(4, 24)}
          </Text>
          <TypographyStylesProvider>
            <div dangerouslySetInnerHTML={{ __html: htmlText ?? '' }} />
          </TypographyStylesProvider>
        </Box>
      </Center>
      <Modal
        opened={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Container>
          <Text id="modal-title" size="xl" fw={700} c="#0000FF">
            Удалить заметку?
          </Text>
          <Text id="modal-description" size="md" fw={700} ta="center">
            {todo?.title}
          </Text>
          <Group
            mt={16}
            style={{ display: 'flex', justifyContent: 'flex-end' }}
          >
            <Button onClick={handleClose} radius={15} color="#008000">
              Отмена
            </Button>
            <Button onClick={onDeleteTodo} radius={15} color="#FF0000">
              Удалить
            </Button>
          </Group>
        </Container>
      </Modal>
    </Container>
  )
}
