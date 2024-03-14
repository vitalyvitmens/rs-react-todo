import { Button, Center, Container, Loader } from '@mantine/core'
import { Sidebar } from '../../components/Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { Suspense } from 'react'

export const HomePage = () => {
  const { logOut, isLoading, isError } = useAuth()
  const handleLogout = () => logOut(() => {})

  if (isLoading || isError) {
    return (
      <Center>
        <Loader mt="50%" color="#0000FF" size={77} />
      </Center>
    )
  }

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
            border: '2px solid #FFC94C',
            borderRadius: '10px',
            boxShadow: '-5px -4px 10px black',
          }}
        >
          <Sidebar />
          <Suspense
            fallback={
              <Center>
                <Loader mt="50%" color="#0000FF" size={77} />
              </Center>
            }
          >
            <Outlet />
          </Suspense>
        </Container>
      </Center>
    </Container>
  )
}
