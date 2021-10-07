import type { NextPage } from 'next'
import Head from 'next/head'


const Home: NextPage = () => {
  return (
    <>
    <Head>
      <title>🇵🇭 Let Leni Lead</title>
    </Head>
    <div className="w-full h-screen bg-pink-400 flex flex-col justify-center items-center">
      <h1 className="text-5xl text-white">🇵🇭 Let Leni Lead 🇵🇭</h1>
      <div className="text-center mt-4">
        <h2 className="text-4xl text-white"><a href="https://www.facebook.com/hashtag/LabanLeni2022">#LetLeniLead</a></h2>
        <h2 className="text-4xl text-white"><a href="https://www.facebook.com/hashtag/labanleni2022">#LabanLeni2022</a></h2>
      </div>
    </div>
    </>
  )
}

export default Home
