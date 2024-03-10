import { useState } from 'react'
import todoLogo from '../../assets/todo.png'
import { useAuth } from '../../hooks/useAuth'
import {
  Button,
  Center,
  Container,
  Group,
  Text,
  Title,
  useMantineTheme,
} from '@mantine/core'

export const HomePage = () => {
  const { logOut } = useAuth()
  const [count, setCount] = useState(0)
  const theme = useMantineTheme()
  const colorGreen = theme.colors[theme.primaryColor][1]
  const colorYellow = theme.colors[theme.primaryColor][2]
  const colorLightOrange = theme.colors[theme.primaryColor][3]
  const colorBrown = theme.colors[theme.primaryColor][4]
  const colorBlue = theme.colors[theme.primaryColor][5]
  const colorRed = theme.colors[theme.primaryColor][7]
  const textShadowMD = theme.shadows.md

  const handleLogout = () => logOut(() => {})

  return (
    <Container p={16}>
      <Group justify="end">
        <Button onClick={handleLogout} variant="outline" size="sm" radius={15}>
          Logout
        </Button>
      </Group>
      <Center>
        <a
          href="https://github.com/vitalyvitmens/rs-react-todo"
          target="_blank"
        >
          <img src={todoLogo} alt="ToDo" style={{ width: '230px' }} />
        </a>
      </Center>
      <Container c={colorYellow} ta="center">
        <Title c={colorLightOrange} style={{ textShadow: textShadowMD }}>
          Hello, Mantine!
        </Title>
        <Text c={colorLightOrange}>
          Your primary color is {colorLightOrange}
        </Text>
        <Button color="primary">This button has the todo color</Button>
      </Container>

      <Center>
        <Title size="4rem" c={colorBlue}>
          ToDo
        </Title>
      </Center>
      <Center color={colorRed}>
        <Button
          justify="center"
          w={320}
          variant="default"
          bg={colorGreen}
          onClick={() => setCount((count) => count + 1)}
        >
          <Text c={colorBrown} size="1.5rem" fw={700}>
            count is:
            <span
              style={{
                fontWeight: 'bold',
                fontSize: '1.75rem',
                paddingLeft: '1rem',
                color: colorRed,
              }}
            >
              {count}
            </span>
          </Text>
        </Button>
      </Center>
      <Container
        w={320}
        fw={800}
        ta="center"
        size="responsive"
        bg="var(--mantine-color-blue-light)"
        c={colorYellow}
      >
        Edit <code>src/App.tsx</code> and save to test HMR
      </Container>
      <Center h={100} p={20} mt={-15}>
        <Text
          c={colorRed}
          size="xl"
          fw={800}
          fs="italic"
          td="underline"
          ta="center"
        >
          Click on the Vite and React logos to learn more
        </Text>
      </Center>
    </Container>
  )
}
