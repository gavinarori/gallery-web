import React from 'react'
import Link from 'next/link'
import BuyMeACoffee from './icons/BuyMeCoffee'

export const Navbar = () => {
  return (
    <div className='border-b flex flex-col sm:flex-row items-start sm:items-center sm:pr-10 bg-gray-100'>
      <div className="py-3 px-8 flex flex-1 items-center ">
        <Link className="mr-5 flex items-center" href="/">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" 
        stroke="currentColor" className="w-6 h-6 mr-2">
        <path strokeLinecap="round" strokeLinejoin="round" 
        d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
         </svg>

          <p className="ml-2 mr-4 text-lg font-semibold">
            Gallery-web
            </p>
        </Link>
        <a className="mr-5 text-sm " href="/">
          <p>Home</p>
          </a>

    </div>
      <div className='flex sm:items-center pl-8 pb-3 sm:pb-0'>
        <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-slate-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-slate-200 hover:bg-slate-200/80  h-10 w-10">
          <svg xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0">
            <circle cx="12" cy="12" r="4"></circle>
            <path d="M12 2v2"></path>
            <path d="M12 20v2"></path>
            <path d="m4.93 4.93 1.41 1.41"></path>
            <path d="m17.66 17.66 1.41 1.41"></path>
            <path d="M2 12h2"></path>
            <path d="M20 12h2"></path>
            <path d="m6.34 17.66-1.41 1.41"></path>
            <path d="m19.07 4.93-1.41 1.41"></path>
          </svg><svg xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100">
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
            </svg><span className="sr-only">Toggle theme</span>
        </button>
        {/**message button */}
        <a
            href="https://www.buymeacoffee.com/arorigavin"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg ml-3 mb-3 space-x-3 inline-flex justify-center items-center  px-6 mt-1 py-2 border hover:scale-105 transition-all duration-75 border-gray-200 bg-white max-w-fit mx-auto bg-slate-200 "
          >
            <BuyMeACoffee className="w-6 h-6" />
            <p className="font-medium text-gray-600">Buy me a coffee</p>
          </a>

      </div>
      </div>
      
  )
}

