import { Alert, Button, Text, Box, Title, Group } from '@mantine/core'
import { Link } from 'react-router-dom'

export const NotFoundPage = () => {
  return (
    <Box maw={340} mx="auto" mt={100}>
      <Title ta="center" c="#0000FF">
        Page Not Found
      </Title>
      <Group justify="center" mt="md">
        <Alert radius={5}>Page Not Found</Alert>
        <Text mb={10} fz={16} fw={600} style={{ color: 'red' }}>
          Sorry this page not found
        </Text>
        <Button radius={5}>
          <Link to="/">Back To Home Page</Link>
        </Button>
      </Group>
    </Box>
  )
}
