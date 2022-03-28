import Head from 'next/head'
import Image from 'next/image'


export default function Home() {
  return (
    <div >
      <Head>
        <title>Codedamn</title>
        <meta name="description" content="Codedamn's blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <img src="/Home.png" alt="" />
      </div>
    </div>
  )
}
