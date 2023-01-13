import type { NextPage } from 'next'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import Footer from '../components/Footer'
import Head from 'next/head'
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Incubator</title>
      </Head> <Navbar /> <Main /><Footer /> </div>
  )
}

export default Home
