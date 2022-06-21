import { Suspense } from 'react'
import { ChakraProvider, Alert } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { GlobalStyles, theme } from 'styles'
import { Loader } from 'components/shared/Loader'
import { ErrorBoundary } from 'components/shared/ErrorBoundary'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <GlobalStyles />
      <ErrorBoundary fallback={<Alert>Something went wrong. Please try again.</Alert>}>
        <Suspense fallback={<Loader />}>
          <Component {...pageProps} />
        </Suspense>
      </ErrorBoundary>
    </ChakraProvider>
  )
}

export default MyApp
