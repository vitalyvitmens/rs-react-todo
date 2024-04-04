import { useNavigate } from 'react-router-dom'
import { RoutePaths } from '../../routes/RoutePaths'
import { registerUser } from '../../manageAuth'
import { useAuth } from '../../hooks/useAuth'
import { ImageMT } from '../../components/Mantine/ImageMT.tsx/ImageMT'
import { Colors } from '../../constants/colors'
import {
  validateConfirmPassword,
  validateRegisterPassword,
  validateUsername,
} from '../../utils/validation'
import { navigateTo } from '../../utils/navigateTo'
import { useForm } from '@mantine/form'
import { Stylizloader } from '../../components/Mantine/Stylizloader/Stylizloader'
import {
  PasswordInput,
  Group,
  TextInput,
  Button,
  Box,
  Title,
} from '@mantine/core'

export const RegisterPage = () => {
  const { logIn, isLoading, isError } = useAuth()
  const navigate = useNavigate()
  const form = useForm({
    initialValues: {
      username: '',
      password: '',
      confirmPassword: '',
    },
    validate: {
      username: validateUsername,
      password: validateRegisterPassword,
      confirmPassword: (value, values) =>
        validateConfirmPassword(value, values),
    },
  })

  const handleSubmit = form.onSubmit(({ username, password }) =>
    registerUser({ username, password }, () => {
      logIn({ username, password }, () =>
        navigate(RoutePaths.Home, { replace: true })
      )
    })
  )

  if (isLoading || isError) {
    return <Stylizloader />
  }

  return (
    <Box maw={340} mx="auto" mt={100}>
      <Title ta="center" c={Colors.blue}>
        Registration
      </Title>
      <form onSubmit={handleSubmit}>
        <TextInput
          id="register-username"
          radius={5}
          c={Colors.primary}
          label="Username"
          placeholder="Username"
          {...form.getInputProps('username')}
        />
        <PasswordInput
          id="register-password"
          radius={5}
          c={Colors.primary}
          label="Password"
          placeholder="Password"
          {...form.getInputProps('password')}
        />
        <PasswordInput
          id="register-confirm-password"
          radius={5}
          c={Colors.primary}
          label="Confirm password"
          placeholder="Confirm password"
          {...form.getInputProps('confirmPassword')}
        />
        <Group wrap="nowrap" mt="md">
          <Button
            component="a"
            onClick={() => navigateTo(navigate, RoutePaths.Login)}
            variant="subtle"
            c={Colors.red}
            fw="bold"
          >
            Уже зарегистрированы?
          </Button>

          <Button type="submit" w="120px" bg="#006400" radius={5}>
            Register
          </Button>
        </Group>
      </form>
      {(form.errors.username || form.errors.password || isError) && <ImageMT />}
    </Box>
  )
}
