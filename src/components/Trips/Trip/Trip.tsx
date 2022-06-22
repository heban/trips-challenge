import { FC, useRef } from 'react'
import { Flex, Box, useTheme } from '@chakra-ui/react'
import Image from 'next/image'
import { differenceInDays } from 'date-fns'
import { TripsData } from 'interfaces/TripsData'
import { Content } from 'components/shared/Content'
import { convertToPrice } from 'utils/currencyFormatter'

export const Trip: FC<TripsData> = ({
  poster,
  title_en,
  countries,
  dateFrom,
  dateTo,
  price,
  originalPrice,
  currency,
  score,
}) => {
  const { colors } = useTheme()
  const lazyRoot = useRef(null)
  const amountOfCountries = countries.length ?? 1
  const amountOfDays = differenceInDays(new Date(dateTo), new Date(dateFrom))

  return (
    <Flex as="li" flexBasis={{ base: '100%', md: '50%', xl: '33.333%' }} w="100%" p={{ base: '10px 0px', md: '10px' }}>
      <Box w="100%" borderRadius="9px" border={`1px solid ${colors.gray[100]}`}>
        {poster && (
          <Box
            ref={lazyRoot}
            w="100%"
            h="260px"
            overflow="hidden"
            pos="relative"
            borderTopRightRadius="9px"
            borderTopLeftRadius="9px"
          >
            <Image
              src={poster}
              alt={`Picture of ${title_en} trip`}
              layout="fill"
              objectFit="cover"
              lazyRoot={lazyRoot}
            />
          </Box>
        )}
        <Flex direction="column" w="100%" p="22px 20px">
          <Content variantFont="secondary" variantFontSize={14} mb="4px">
            {`${amountOfCountries} ${amountOfCountries > 1 ? 'Countries' : 'Country'}`},{' '}
            {`${amountOfDays} ${amountOfDays > 1 ? 'days' : 'day'}`}
          </Content>
          <Content as="h2" variantFontSize={20} mb="20px">
            {title_en}
          </Content>
          <Flex mb="5px">
            <Content variantFontSize={16}>{score}</Content>
          </Flex>
          <Content variantFont="secondary" variantColor="light" variantFontSize={14}>
            <Box as="span" color={colors.textDark}>
              From {convertToPrice(price, currency)}
            </Box>{' '}
            <Box as="span">&#x2022;</Box>{' '}
            <Box as="span" textDecoration="line-through">
              Price <Box as="span">{convertToPrice(originalPrice, currency)}</Box>
            </Box>
          </Content>
        </Flex>
      </Box>
    </Flex>
  )
}

export default Trip
