import { Colors } from '../../../constants/colors'
import { Center, Loader } from '@mantine/core'
import { NoProps } from '../../../types'

export const Stylizloader: React.FC<NoProps> = () => {
  return (
    <Center>
      <Loader mt="50%" color={Colors.blue} size={77} />
    </Center>
  )
}
