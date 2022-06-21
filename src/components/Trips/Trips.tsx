import { FC } from 'react'
import { Flex } from '@chakra-ui/react'
import { TripsProps } from 'interfaces/TripsProps'
import { Content } from 'components/shared/Content'

export const Trips: FC<TripsProps> = ({ items }) => {
  const emptyList = !items?.length

  return (
    <Flex direction="column" w="100%" justify="center" alignItems="center">
      <Content as="h1" variantFontSize={26} mb="20px" pt="20px">
        Recently viewed trips
      </Content>
      {emptyList ? (
        <Content variantFont="secondary">Nothing to show</Content>
      ) : (
        <Flex as="ul">
          {items?.map((item) => (
            <Content key={item.id}>{item.id}</Content>
          ))}
        </Flex>
      )}
    </Flex>
  )
}

export default Trips
