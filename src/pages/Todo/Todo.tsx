import {
  Box,
  Button,
  Loader,
  Container,
  Modal,
  Text,
  TypographyStylesProvider,
} from '@mantine/core'
import { IconTrash, IconEdit } from '@tabler/icons-react'
import { SetStateAction, useEffect, useState } from 'react'
import { useSelectTodo } from '../../hooks/useSelectTodo'
import { deleteTodo } from '../../manageData'
import { Link, useNavigate } from 'react-router-dom'
import { ITodos } from '../../db'
import { marked } from 'marked'

const styleTodo = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

export const Todo = () => {
  const [todo, setTodo] = useState<ITodos>()
  const {
    todo: selectedTodo,
    todos,
    isLoading,
    onTodoDelete,
    selectTodo,
  } = useSelectTodo()

  // Modal
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  //-------------------------------

  const navigate = useNavigate()
  useEffect(() => {
    setTodo(selectedTodo)
  }, [selectedTodo])

  const onDeleteTodo = () => {
    deleteTodo(selectedTodo.id!)
    onTodoDelete()
    // Новый код
    selectTodo(todos.length - 1)
    // navigate('/')
    setTodo(todos[todos.length - 1])
    handleClose()
  }

  const onEditTodo = () => {
    navigate(`/${todo?.id}`)
  }

  // \uD83D\uDC47️ добавить состояние для хранения HTML-текста
  const [htmlText, setHtmlText] = useState<string | null>(null)

  // \uD83D\uDC47️ использовать useEffect для преобразования текста в HTML
  useEffect(() => {
    // проверить, что текст существует
    if (todo?.description) {
      // вызвать функцию marked.parse и дождаться ее результата
      const rawMarkup = marked.parse(todo.description) // сохранить результат в переменную
      // добавить проверку типа для rawMarkup
      if (rawMarkup instanceof Promise) {
        // если rawMarkup является промисом, то дождаться его разрешения
        rawMarkup.then((html: SetStateAction<string | null>) => {
          // установить результат в состояние htmlText
          setHtmlText(html)
        })
      } else {
        // если rawMarkup является строкой, то просто установить его в состояние htmlText
        setHtmlText(rawMarkup)
      }
    }
  }, [todo?.description])
  return (
    <Container style={{ padding: '20px' }}>
      <Box
        h={50}
        mb={2}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box onClick={handleOpen}>
          <IconTrash style={{ color: '#F3B900', cursor: 'pointer' }} />
        </Box>
        <Box>
          <Link
            style={{
              border: '1px solid #F3B900',
              padding: '5px 10px',
              borderRadius: '5px',
              color: '#F3B900',
            }}
            to="/new"
          >
            Добавить заметку
          </Link>
        </Box>
        <Box>
          <IconEdit
            onClick={onEditTodo}
            style={{ color: '#F3B900', cursor: 'pointer' }}
          />
        </Box>
      </Box>
      <Container>
        {isLoading ? (
          <Loader />
        ) : (
          <Box>
            <Box mb={2}>
              <Text variant="h4">{todo?.title}</Text>
            </Box>
            <TypographyStylesProvider>
              <div dangerouslySetInnerHTML={{ __html: htmlText ?? '' }} />
            </TypographyStylesProvider>
          </Box>
        )}
      </Container>
      <Modal
        opened={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box style={{ styleTodo }}>
          <Text id="modal-modal-title" variant="h6" component="h2">
            Удалить заметку?
          </Text>
          <Text id="modal-modal-description" style={{ mt: 2 }}>
            Подтвердить удаление заметки?
          </Text>
          <Box mt={4} style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button
              onClick={handleClose}
              style={{ marginRight: '10px' }}
              variant="contained"
              color="success"
            >
              Отмена
            </Button>
            <Button onClick={onDeleteTodo} variant="outlined" color="error">
              Удалить
            </Button>
          </Box>
        </Box>
      </Modal>
    </Container>
  )
}
