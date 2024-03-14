import { Outlet } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { ComponentWithSuspense } from '../../components/ComponentWithSuspense/ComponentWithSuspense'
import { Sidebar } from '../../components/Sidebar/Sidebar'
import { Stylizloader } from '../../components/Mantine/Stylizloader/Stylizloader'
import { Button, Center, Container } from '@mantine/core'

export const HomePage = () => {
  const { logOut, isLoading, isError } = useAuth()
  const handleLogout = () => logOut(() => {})

  if (isLoading || isError) {
    return <Stylizloader />
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
          <ComponentWithSuspense component={Sidebar} />
          <ComponentWithSuspense component={Outlet} />
        </Container>
      </Center>
    </Container>
  )
}
