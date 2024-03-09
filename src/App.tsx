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
  const themeColor1 = theme.colors[theme.primaryColor][1]
  const themeColor2 = theme.colors[theme.primaryColor][2]
  const themeColor3 = theme.colors[theme.primaryColor][3]
  const themeColor5 = theme.colors[theme.primaryColor][5]
  const themeColor7 = theme.colors[theme.primaryColor][7]
  const themeShadow3 = theme.shadows.md

  return (
    <BackgroundImage src={bgImage} style={{ height: '100vh' }}>
      <Center h={300}>
        <a
          href="https://github.com/vitalyvitmens/rs-react-todo"
          target="_blank"
        >
          <img src={todoLogo} alt="ToDo" style={{ width: '300px' }} />
        </a>
      </Center>
      <Container c="yellow" ta="center" mt={-30}>
        <Title c={themeColor3} style={{textShadow: themeShadow3}}>Hello, Mantine!</Title>
        <Text c={themeColor3}>Your primary color is {themeColor3}</Text>
        <Button color="primary">This button has the note color</Button>
      </Container>

      <Center>
        <Title size="4rem" c={themeColor5}>
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
          bg={themeColor1}
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
        c={themeColor2}
      >
        Edit <code>src/App.tsx</code> and save to test HMR
      </Container>
      <Center h={100} p={20} mt={-15}>
        <Text
          c={themeColor7}
          size="xl"
          fw={800}
          fs="italic"
          td="underline"
          ta="center"
        >
          Click on the Vite and React logos to learn more
        </Text>
      </Center>
    </BackgroundImage>
  )
}

export default App
