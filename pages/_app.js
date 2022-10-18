import '../styles/globals.css'
import Layout from '../components/layout'
import { ThemeProvider } from 'next-themes'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Head from 'next/head'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faBarChart, faPhone} from '@fortawesome/free-solid-svg-icons'
import { NextSeo } from "next-seo";
library.add(fab, faCheckSquare, faCoffee, faPhone,)


export default function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    const handleRouteChange = (url, { shallow }) => {
      console.log(
        `App is changing to ${url} ${
          shallow ? 'with' : 'without'
        } shallow routing`
      )
    }

    router.events.on('routeChangeStart', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [router.events])

  return (
  <>
   <NextSeo
        title="The Non-Stop Series"
        titleTemplate="The Non-Stop Series"
        defaultTitle="The Non-Stop Series"
        description="The Logos-Rhema Foundation for Leadership Resource Development, through the Non-Stop Series, willingly seeks to bring back such undiluted worship, while try its possible best to mirror and imitate here on earth, the never-ending continuous worship which has been, and will forever continue to be, the mainstay in the courts of Heaven."
        
        canonical="https://www.thenonstop.org/"
        locale="en_US"
        additionalMetaTags={[{
          property: 'keywords',
          content: ' non-stop, thenonstop, non-stop worship, non-stop praise, non stop worship, non stop praise,  praising god, praise and worship, worship definition, christian, praise and worship music, praise music, worship scripture, worship christian, praise scriptures, the bible definition, whatis worship, worship god, praise jesus, praise and worship scriptures, biblical meaning, scripture definition, praise worship, christian praise music, scriptures on praising god, bible worship, biblical definition, biblical words, praise church, worship definition bible, praise be to god'
        }]}
        openGraph={{
          url: "https://www.thenonstop.org/",
          title: "The Non-Stop Series",
          description: "The Logos-Rhema Foundation for Leadership Resource Development, through the Non-Stop Series, willingly seeks to bring back such undiluted worship, while try its possible best to mirror and imitate here on earth, the never-ending continuous worship which has been, and will forever continue to be, the mainstay in the courts of Heaven.",
          images: [
            {
              url: "/images/non-stop-logo.jpg",
              width: 800,
              height: 420,
              alt: "The Non-Stop Series",
            },
          ],
        }}
        twitter={{
          handle: "@nonstopseries_",
          site: "@nonstopseries_",
          cardType: "summary_large_image",
        }}


      />
  {!loading ? <Layout>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </Layout> 
  : 
  ('Loading.....Component')}
    
  </>
  )
}