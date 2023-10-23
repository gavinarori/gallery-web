"use client"
import { signIn } from "next-auth/react";
import {
  useState,
} from "react";
import  LoadingDots from "@/app/components/Services/icons/loading-spinner";
import  Google from "@/app/components/Services/icons/google";
import Image from "next/image";

const SignInModal = () => {
  const [signInClicked, setSignInClicked] = useState(false);
  return (
    
      <div className="w-full overflow-hidden  md:max-w-md ">
        <div className="flex flex-col items-center justify-center space-y-3   px-4 py-6 pt-8 text-center md:px-16">
          <a href="">
          <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth="1.5" 
          stroke="currentColor" 
          className="w-6 h-6 mr-2">
        <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
         </svg>
          </a>
          <h3 className="font-display text-2xl font-bold">Sign In</h3>
          <p className="text-sm text-gray-500">
             only your email and profile picture will be stored and your uploads.
          </p>
        </div>

        <div className="flex flex-col space-y-4  px-4 py-8 md:px-16">
          <button
            disabled={signInClicked}
            className={`${
              signInClicked
                ? "cursor-not-allowed border-gray-200 "
                : "border border-gray-200 hover:bg-accent"
            } flex h-10 w-full items-center justify-center space-x-3 rounded-md border text-sm shadow-sm transition-all duration-75 focus:outline-none`}
            onClick={() => {
              setSignInClicked(true);
              signIn("google");
            }}
          >
            {signInClicked ? (
              <LoadingDots  />
            ) : (
              <>
                <Google className="h-5 w-5" />
                <p>Sign In with Google</p>
              </>
            )}
          </button>
        </div>
      </div>
    
  );
};

export default SignInModal;