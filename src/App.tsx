import { useState } from 'react'
import todoLogo from './assets/todo.png'
import bgImage from './assets/bgImage.jpg'
import {
  BackgroundImage,
  Button,
  Center,
  Container,
  Text,
  Title,
  useMantineTheme,
} from '@mantine/core'
import '@mantine/core/styles.css'

function App() {
  const [count, setCount] = useState(0)
  const theme = useMantineTheme()

  return (
    <BackgroundImage
      src={bgImage}
      style={{ height: '100vh' }}
    >
      <Center h={300}>
        <a
          href="https://github.com/vitalyvitmens/rs-react-todo"
          target="_blank"
        >
          <img src={todoLogo} alt="ToDo" style={{ width: '300px' }} />
        </a>
      </Center>
      <Container c="yellow" ta="center" mt={-60}>
        <h1>Hello, Mantine!</h1>
        <p>Your primary color is {theme.colors[theme.primaryColor][0]}</p>
        <Button color="primary">This button has the note color</Button>
      </Container>

      <Center c="#fff">
        <Title size="4rem" c="blue">
          ToDo
        </Title>
      </Center>
      <Center color="red">
        <Button
          justify="center"
          w={320}
          ml={10}
          mr={10}
          variant="default"
          bg="green"
          onClick={() => setCount((count) => count + 1)}
        >
          <Text c="brown" size="1.5rem" fw={700}>
            count is {count}
          </Text>
        </Button>
      </Center>
      <Container
        w={320}
        fw={800}
        ta="center"
        size="responsive"
        bg="var(--mantine-color-blue-light)"
        c="yellow"
      >
        Edit <code>src/App.tsx</code> and save to test HMR
      </Container>
      <Center h={100} p={20} mt={-15}>
        <Text c="red" size="xl" fw={800} fs="italic" td="underline" ta="center">
          Click on the Vite and React logos to learn more
        </Text>
      </Center>
    </BackgroundImage>
  )
}

export default App
