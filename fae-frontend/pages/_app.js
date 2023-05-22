import Layout from '@/components/utils/Layout'
import '@/styles/globals.css'
import '@/styles/pages.css'
import { ChakraProvider } from '@chakra-ui/react'
import { UserProvider } from '@auth0/nextjs-auth0/client'
import { store } from '@/lib/redux/store'
import { Provider } from 'react-redux'

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <ChakraProvider>
        <Provider store={store}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </ChakraProvider>
    </UserProvider>
  )
}
