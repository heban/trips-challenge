import { ReactNode } from 'react'
import { Container } from '@chakra-ui/react'
import { appMaxWidth, appDesktopPadding, appMobilePadding } from 'styles'

type Props = {
  children?: ReactNode
}

export const Layout = ({ children }: Props) => (
  <Container maxWidth={appMaxWidth} as="main" p={{ base: appMobilePadding, md: appDesktopPadding }}>
    {children}
  </Container>
)

export default Layout
