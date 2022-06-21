import { FC } from 'react'
import { Spinner, Flex } from '@chakra-ui/react'

export const Loader: FC = () => (
  <Flex w="10%" p="60px 20px" alignItems="center" justify="center">
    <Spinner thickness="4px" speed="0.5s" emptyColor="gray.200" color="green.500" size="xl" label="loading" />
  </Flex>
)

export default Loader
