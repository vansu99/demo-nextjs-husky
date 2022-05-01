import Head from 'next/head'
import '../styles/globals.css'
import { AppProps } from 'next/app'
import type { NextPage } from 'next'
import { PropsWithChildren } from 'react'

type NextPageWithLayout = NextPage & {
  Layout?: ({ children }: PropsWithChildren<unknown>) => JSX.Element
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  return (
    <>
      <Head>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
