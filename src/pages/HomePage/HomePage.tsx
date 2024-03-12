import { Center, Container } from '@mantine/core'
// import { Navbar } from '../../components/Navbar/Navbar'
import { Sidebar } from '../../components/Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

export const HomePage = () => {
  return (
    <Center>
      <Container
        m={16}
        p={8}
        w="100%"
        bg="bisque"
        style={{
          display: 'flex',
          border: '2px solid #0000FF',
          borderRadius: '10px',
          margin: '0 auto',
          boxShadow: '0px 0px 14px 1px rgba(34, 60, 80, 0.21)',
        }}
      >
        {/* <Navbar /> */}
        <Sidebar />
        <Outlet />
      </Container>
    </Center>
  )
}
