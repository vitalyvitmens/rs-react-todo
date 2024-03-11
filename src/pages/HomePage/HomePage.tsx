import { Container } from '@mantine/core'
// import { Navbar } from '../../components/Navbar/Navbar'
import { Sidebar } from '../../components/Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

export const HomePage = () => {
  return (
    <Container
      p={16}
      style={{
        width: '1150px',
        minHeight: '700px',
        display: 'flex',
        border: '2px solid #cdcdcd',
        borderRadius: '10px',
        margin: '0 auto',
        boxShadow: '0px 0px 14px 1px rgba(34, 60, 80, 0.21)',
      }}
    >
      {/* <Navbar /> */}
      <Sidebar />
      <Outlet />
    </Container>
  )
}
