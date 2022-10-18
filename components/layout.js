import Head from 'next/head'

import Footer from './footer'
import Header from './header'
import Navbar from './navbar'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon_io/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon_io/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon_io/favicon-16x16.png" />
        <link rel="manifest" href="/images/favicon_io/site.webmanifest" />
      </Head>

      <div className='bg-lightcolor2 dark:bg-gray-900 absolute w-full top-0 overflow-x-hidden'>
        <Header />
        <main>{children}</main>
        <Footer />

      </div>

    </>
  )
}