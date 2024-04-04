import { useNavigate } from 'react-router-dom'
import { RoutePaths } from '../../routes/RoutePaths'
import { useAuth } from '../../hooks/useAuth'
import { loginUser } from '../../manageAuth'
import { ImageMT } from '../../components/Mantine/ImageMT.tsx/ImageMT'
import { Colors } from '../../constants/colors'
import { validateLoginPassword, validateUsername } from '../../utils/validation'
import { navigateTo } from '../../utils/navigateTo'
import { useForm } from '@mantine/form'
import { Stylizloader } from '../../components/Mantine/Stylizloader/Stylizloader'
import {
  Group,
  PasswordInput,
  TextInput,
  Button,
  Box,
  Title,
} from '@mantine/core'

export const LoginPage = () => {
  const { logIn, isLoading, isError } = useAuth()
  const navigate = useNavigate()
  const form = useForm({
    initialValues: { username: '', password: '' },
    validate: {
      username: validateUsername,
      password: validateLoginPassword,
    },
  })

  const handleSubmit = form.onSubmit((values) =>
    loginUser(values, () => {
      logIn(values, () => navigate(RoutePaths.Home, { replace: true }))
    })
  )

  if (isLoading || isError) {
    return <Stylizloader />
  }

  return (
    <Box maw={340} mx="auto" mt={100}>
      <Title ta="center" c={Colors.blue}>
        Authorization
      </Title>
      <form onSubmit={handleSubmit}>
        <TextInput
          id="login-username"
          radius={5}
          c={Colors.primary}
          label="Username"
          placeholder="Username"
          {...form.getInputProps('username')}
        />
        <PasswordInput
          id="login-password"
          radius={5}
          c={Colors.primary}
          label="Password"
          placeholder="Password"
          {...form.getInputProps('password')}
        />
        <Group wrap="nowrap" mt="md">
          <Button
            component="a"
            onClick={() => navigateTo(navigate, RoutePaths.Register)}
            variant="subtle"
            c={Colors.red}
            fw="bold"
          >
            Ещё не зарегистрированы?
          </Button>
          <Button type="submit" w="120px" bg="#006400" radius={5}>
            Login
          </Button>
        </Group>
      </form>
      {(form.errors.username || form.errors.password || isError) && <ImageMT />}
    </Box>
  )
}
