import { RoutePaths } from '../../routes/RoutePaths'
import { Colors } from '../../constants/colors'
import { Alert, Button, Text, Box, Title, Group } from '@mantine/core'
import { Link } from 'react-router-dom'

export const Offline = () => {
  return (
    <Box maw={340} mx="auto" mt={100}>
      <Title ta="center" c={Colors.blue}>
        OFFLINE
      </Title>
      <Group justify="center" mt="md">
        <Alert radius={5}>No internet connection</Alert>
        <Text mb={10} fz={16} fw={600} style={{ color: 'red' }}>
          Sorry this page isn't available offline
        </Text>
        <Button radius={5}>
          <Link to={RoutePaths.Home}>Back To Home Page</Link>
        </Button>
      </Group>
    </Box>
  )
}
