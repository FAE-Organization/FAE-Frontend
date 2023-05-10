import Layout from '@/components/utils/Layout'
import '@/styles/globals.css'
import '@/styles/pages.css'
import { ChakraProvider } from '@chakra-ui/react'
import { UserProvider } from '@auth0/nextjs-auth0/client'

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </UserProvider>
  )
}
