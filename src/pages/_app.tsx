import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from './Layout'
import { MenuProvider } from '../context/MenuContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (

    <>
      <MenuProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MenuProvider>
    </>

  )
}

export default MyApp
