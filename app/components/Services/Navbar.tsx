import React from 'react'
import Link from 'next/link'

export const Navbar = () => {
  return (
    <div className='border-b flex flex-col sm:flex-row items-start sm:items-center sm:pr-10 bg-slate-300'>
      <div className="py-3 px-8 flex flex-1 items-center ">
        <Link className="mr-5 flex items-center" href="/">
          <svg xmlns="http://www.w3.org/2000/svg" 
          width="19" 
          height="19" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="opacity-85">
            <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z">
              </path>
              <path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97">
                </path>
          </svg>
          <p className="ml-2 mr-4 text-lg font-semibold">
            SourceCode
            </p>
        </Link>
        <a className="mr-5 text-sm " href="/">
          <p>Home</p>
          </a>
          <Link className="mr-5 text-sm opacity-60" href="/search">
            <p>Search</p></Link>
    </div>
      <div className='flex sm:items-center pl-8 pb-3 sm:pb-0'>
      <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-slate-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-slate-200 text-secondary-foreground hover:bg-slate-200/80 h-10 px-4 py-2 mr-4">
        Sign In
        <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className="h-4 w-4">
          <path d="m9 18 6-6-6-6"></path>
      </svg>
      {/**theme button */}
      </button>
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
        <Link href='/conversations'>
        <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-slate-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-slate-200 text-secondary-foreground hover:bg-slate-200/80 h-10 px-4 py-2 mr-4 ml-2">
        <svg xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        strokeWidth="1.5" 
        stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" 
        strokeLinejoin="round" 
        d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
      </svg>
      </button>
        </Link>

      </div>
      </div>
      
  )
}

