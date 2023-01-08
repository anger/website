import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from "next/head";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { motion } from 'framer-motion';
import { Header } from '../components/Header/Navbar';
import { Footer } from '../components/Footer/Footer';
config.autoAddCss = false

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>anger</title>
        <link rel="icon" type="image/png" href="https://avatars.githubusercontent.com/u/48845671" />
      </Head>
      <div>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
      
    </>
  )
}

export default MyApp
