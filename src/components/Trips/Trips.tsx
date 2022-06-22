import { FC } from 'react'
import { Flex } from '@chakra-ui/react'
import { TripsProps } from 'interfaces/TripsProps'
import { Content } from 'components/shared/Content'
import { Trip } from './Trip'

export const Trips: FC<TripsProps> = ({ items }) => {
  const emptyList = !items?.length

  return (
    <Flex direction="column" w="100%" justify="center" alignItems="center">
      <Content as="h1" variantFontSize={26} mb="20px" pt="20px" textAlign="center">
        Recently viewed trips
      </Content>
      {emptyList ? (
        <Content variantFont="secondary">Nothing to show</Content>
      ) : (
        <Flex as="ul" w="100%" listStyleType="none" p="0px" direction={{ base: 'column', md: 'row' }} flexWrap="wrap">
          {items?.map((item) => (
            <Trip {...item} key={item.id} />
          ))}
        </Flex>
      )}
    </Flex>
  )
}

export default Trips
