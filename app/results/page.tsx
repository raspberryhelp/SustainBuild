import React from 'react'
import Navbar from '../components/header'


const page = () => {
  return (
    <div className="relative h-screen" id="home">
        <Navbar />
        <div className="flex h-full items-center justify-center px-6 lg:px-8">
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold mb-12 text-left ml-[35%]">Sustainability Quiz</h1>
          <p>results go here</p>
        </div>
        </div>
    </div>
  )
}

export default page