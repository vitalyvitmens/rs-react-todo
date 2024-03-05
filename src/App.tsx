import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import '@mantine/core/styles.css'
import { Button, Center, Container, MantineProvider, Text } from '@mantine/core'

function App() {
  const [count, setCount] = useState(0)

  return (
    <MantineProvider>
      <Center h={200}>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </Center>
      <Center>
        <h1>Vite + React</h1>
      </Center>
      <Center>
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
      </Center>
      <Container w={320} size="responsive">
        Edit <code>src/App.tsx</code> and save to test HMR
      </Container>
      <Center h={100}>
        <Text>Click on the Vite and React logos to learn more</Text>
      </Center>
    </MantineProvider>
  )
}

export default App
