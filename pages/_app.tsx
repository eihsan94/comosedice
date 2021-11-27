import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import SeoHeader from '../components/SeoHeader'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <SeoHeader  />
      <Component {...pageProps} />
    </ChakraProvider>

  )
}

export default MyApp
