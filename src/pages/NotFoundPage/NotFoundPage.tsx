import { Alert, Center, Button, Container, Text } from '@mantine/core'
import { Link } from 'react-router-dom'

export const NotFoundPage = () => {
  return (
    <Container mt={20}>
      <Center
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Alert mb={10} radius={5}>
          Page Not Found
        </Alert>
        <Text mb={10} fz={16} fw={600} style={{ color: 'red' }}>
          Sorry this page not found
        </Text>
        <Button radius={5}>
          <Link to="/">Back To Home Page</Link>
        </Button>
      </Center>
    </Container>
  )
}
