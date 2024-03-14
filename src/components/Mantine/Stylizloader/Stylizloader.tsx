import { Center, Loader } from '@mantine/core'
import { NoProps } from '../../../types'

export const Stylizloader: React.FC<NoProps> = () => {
  return (
    <Center>
      <Loader mt="50%" color="#0000FF" size={77} />
    </Center>
  )
}
