import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Lorran's homepage" />
        <meta name="author" content="Lorran Porto" />
        <meta name="author" content="Lorran;" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:title" content="Lorran Porto" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@lorranprt" />
        <meta name="twitter:creator" content="@lorranprt" />
        <meta name="twitter:image" content="#" />
        <meta property="og:site_name" content="Lorran Porto" />
        <meta name="og:title" content="Lorran Porto" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="#" />
        <title>Lorran Porto - Website</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <LazyVoxelDog />

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main