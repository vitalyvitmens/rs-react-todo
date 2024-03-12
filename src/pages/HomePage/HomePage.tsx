import { Button, Center, Container } from '@mantine/core'
import { Sidebar } from '../../components/Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'

export const HomePage = () => {
  const { logOut } = useAuth()
  const handleLogout = () => logOut(() => {})

  return (
    <Container>
      <Button
        m={8}
        size="sm"
        radius={15}
        variant="outline"
        onClick={handleLogout}
      >
        Logout
      </Button>
      <Center>
        <Container
          p={8}
          w="100%"
          bg="bisque"
          style={{
            display: 'flex',
            border: '2px solid #0000FF',
            borderRadius: '10px',
            boxShadow: '-5px -4px 10px black',
          }}
        >
          <Sidebar />
          <Outlet />
        </Container>
      </Center>
    </Container>
  )
}
