import React from 'react'
import Home from './home/page'
import About from './about/page'
import Explore from './explore/page'
const page = () => {
  return (
    <main className="w-full min-h-screen flex flex-col justify-center items-center bg-[#F7F7F7]">
      <Home />
        <About />
        <Explore />
    </main>
  )
}

export default page