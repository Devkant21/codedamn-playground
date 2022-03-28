import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Codedamn</title>
        <meta name="description" content="Codedamn's blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div>
        <img src="/Home.png" alt="" />
      </div>
      <Footer />
    </div>
  )
}
