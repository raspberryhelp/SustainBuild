'use client';
import React from "react";
import Navbar from "../components/header";
import { useRouter } from 'next/navigation';



const page = () => {
  const router = useRouter();
  
  return (
    <div className="relative h-screen" id="home">
      <Navbar />
      <div className="flex h-full items-center justify-center px-6 lg:px-8">
        <div className="text-center mx-auto">
          <h1 className="text-foreground font-bold text-4xl md:text-3xl xl:text-6xl">
            Sustainacity
          </h1>
          <p className="mt-8 text-black max-w-xl mx-auto">
            Making a sustainable world, one building at a time.
          </p>
          <div className="mt-8 flex justify-center gap-y-4 gap-x-6">
            <button
              onClick={() => router.push('/quiz')}
              className="relative flex h-11 items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-lightgreen dark:before:bg-vibrant-green before:transition before:duration-300 hover:before:scale-105 active:before:scale-95"
            >
              <span className="relative text-base font-semibold text-white">
                Get Started
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page