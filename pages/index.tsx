import type { NextPage } from 'next'
import Head from 'next/head'


const Home: NextPage = () => {
  return (
    <>
    <Head>
      <title>🇵🇭 Let Leni Lead</title>
    </Head>
    <div className="w-full h-screen bg-black flex flex-col justify-center items-center">
      {/* <h1 className="text-5xl text-white">🇵🇭 Let Leni Lead 🇵🇭</h1>
      <div className="text-center mt-4">
        <h2 className="text-4xl text-white"><a href="https://www.facebook.com/hashtag/LabanLeni2022">#LetLeniLead</a></h2>
        <h2 className="text-4xl text-white"><a href="https://www.facebook.com/hashtag/labanleni2022">#LabanLeni2022</a></h2>
      </div> */}
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
        <div className="relative rounded-full h-8 w-8 bg-pink-500 blur opacity-90"></div>
      </div>
      #LabanLeni2022
    </div>
    </>
  )
}

export default Home
