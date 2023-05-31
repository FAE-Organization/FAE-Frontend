import Layout from '@/components/utils/Layout'
import '@/styles/globals.css'
import '@/styles/pages.css'
import { ChakraProvider } from '@chakra-ui/react'
import { UserProvider } from '@auth0/nextjs-auth0/client'
import { store } from '@/lib/redux/store'
import { Provider } from 'react-redux'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

export default function App({ Component, pageProps }) {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <ChakraProvider>
          <Provider store={store}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </Provider>
        </ChakraProvider>
      </UserProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
