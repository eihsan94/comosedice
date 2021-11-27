import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import { ApolloProvider } from '@apollo/client'
import { getContentfulClient } from '../queries/contentfulClient'
import theme from "../styles/theme";
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={getContentfulClient}>
        <ChakraProvider theme={theme}>
        <SeoHeader  />
        <Component {...pageProps} />
      </ChakraProvider>
    </ApolloProvider>

  )
}

export default MyApp


const SeoHeader: React.FC = ({children}) =>  {
  const title = 'Como Sedice | スペイン語勉強'
  const description = 'スペイン語を簡単に勉強できるところ'
  const tags = ['スペイン語', '勉強', '簡単', '楽しい', '勉強しやすい']

  return (
      <Head>
          <title>{title}</title>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="initial-scale=1.0,maximum-scale=1.0,user-scalable=0" />
          <meta name="description" content={description} />
          <meta name="keywords" content={`${tags.map(t => t)}`} />
          <meta name="og:title" property="og:title" content={title}  />
          <meta name="og:type" property="og:type" content="website"  />
          <meta name="og:site_name" property="og:site_name" content={title}  />
          <meta name="og:url" property="og:url" content="https://comosedice.vercel.app/"  />
          <meta name="og:image" property="og:image" content="/images/logo.png"  />
          <meta name="og:description" property="og:description" content={description}  />
          <meta name="twitter:card" property="twitter:card" content="summary_large_image"  />
          <meta name="twitter:title" property="twitter:title" content={title}  />
          <meta name="twitter:site" property="twitter:site" content="https://comosedice.vercel.app/"  />
          <meta name="twitter:description" property="twitter:description" content={description}  />
          <meta name="twitter:creator" property="twitter:creator" content="engku.ihsan"  />
          <meta name="twitter:image" property="twitter:creator" content="/images/logo.png"  />

          <link rel="icon" type="image/png" href="/favicon.ico" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="icon" type="image/png" href="/assets/icons/16.png" sizes= "16x16" />
          <link rel="icon" type="image/png" href="/assets/icons/32.png" sizes= "32x32" />
          <link rel="apple-touch-icon" href="/assets/icons/152.png" />

          {children}
      </Head>
  )
}
