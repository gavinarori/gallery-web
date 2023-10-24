"use client"
import React from 'react'
import Link from 'next/link'
import BuyMeACoffee from './icons/BuyMeCoffee'
import { Session } from "next-auth"
import UserDropdown from "@/app/components/modal/user-dropdown"
import UserAuthForm  from "@/app/components/modal/signModal"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


const Navbar = ({ session }: { session: Session | null }) => {
  const { setTheme } = useTheme()
  return (
    <div className='border-b flex flex-col sm:flex-row items-start sm:items-center sm:pr-10 '>
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
        <div className="mr-5 text-sm ">
        {session ? (
              <UserDropdown session={session} />
            ) : (
              <Dialog>
      <DialogTrigger asChild>
      <button className="rounded-full border border-accent  p-1.5 px-4 hover:bg-accent   text-sm  transition-all ">
            <p className="text-sm font-medium md:space-x-3 sm:space-x-2">sign In</p>
          </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>sign In</DialogTitle>
        </DialogHeader>
        <div className="relative h-[400px] flex-col items-center justify-center lg:max-w-none  lg:px-0">
        <div className=" flex min-h-full flex-col justify-center px-6 py-12 lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <UserAuthForm />
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{" "}
              <Link
                href=""
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href=""
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
        <DialogFooter>
        </DialogFooter>
      </DialogContent>
    </Dialog>
          )}
          <Link href="/music" className='ml-3 mb-3 space-x-3 inline-flex justify-center items-center  px-6 mt-1 py-2'>
          <button className="rounded-full border border-accent  p-1.5 px-4 hover:bg-accent   text-sm  transition-all ">
            <p className="text-sm font-medium md:space-x-3 sm:space-x-2">music</p>
          </button>
          </Link>
          
          </div>

    </div>
      <div className='flex sm:items-center pl-8 pb-3 sm:pb-0'>
        
        <DropdownMenu>
      <DropdownMenuTrigger asChild>
      <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input  hover:bg-accent  h-10 w-10">
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
        <span className="sr-only">Toggle theme</span>
        
        {/**message button */}
        <a
            href="https://www.buymeacoffee.com/arorigavin"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg ml-3 mb-3 space-x-3 inline-flex justify-center items-center  px-6 mt-1 py-2 border hover:scale-105 hover:bg-accent transition-all duration-75 border-accent max-w-fit mx-auto "
          >
            <BuyMeACoffee className="w-6 h-6" />
            <p className="font-medium ">Buy me a coffee</p>
          </a>

      </div>
      </div>
      
  )
}
export default Navbar ;

