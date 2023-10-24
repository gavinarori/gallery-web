'use client'
import { format } from 'date-fns';
import Link from 'next/link';
import React, { useState, useEffect } from 'react'

type User = {
  username: string;
  name: string;
  profile_image: {
    medium: string;
  };
  instagram_username: string;
};

type ArticleProps = {
  id: string;
  urls: {
    regular: string;
  };
  user: User;
  created_at: string;
  likes: number;
};

export default function Article({ id, urls, user, created_at, likes }: ArticleProps) {
  
  const [isLoading, setIsLoading] = useState(true);
  
  // Simulate loading for 3 seconds (you can replace this with your actual data fetching)
  
  setTimeout(() => {
    setIsLoading(false);
  }, 2000);

  return (
    <>
     {isLoading ? ( // Conditionally render loading skeletons
        <div className="p-5 rounded-3xl mb-4 gap-2 shadow-md  animate-pulse">
          {/* Use SkeletonLoading component here */}
          <SkeletonLoading />
        </div>
      ) : (
      <div className="pb-2 pl-1 rounded-3xl mb-4 gap-2 shadow-xl flex flex-1 flex-wrap">
        
        <article key={id} className="rounded-3xl ">
        <div className="after:content group relative mb-5 block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight hover:scale-110 ease-in-out delay-150 hover:-translate-y-1 hover:transition-transform">
        <img
            src={urls.regular}
            alt={user.username}
            className="h-52 object-fit object-cover w-full lg:h-80 rounded-3xl transform  brightness-90 transition will-change-auto group-hover:brightness-125" 
          />
        </div>
          <div className="p-5 pb-0 flex flex-col md:flex-row items-start md:items-center justify-between">
            <article className="flex items-center justify-start">
            <Link href='/components/splash'>
              <img
                src={user.profile_image.medium}
                alt={user.username}
                className="rounded-full mr-2 w-10 md:w-auto"
              />
              </Link>
              <ul>
                <li className=" font-bold">{user.name}</li>
                <li className="text-sm  opacity-75">
                  {format(new Date(created_at), 'dd MMMM yyyy')}
                </li>
              </ul>
            </article>

            <article className="mt-5 md:mt-0">
              <a
                href={`https://instagram.com/${user.instagram_username}`}
                className="text-sm  opacity-75 underline"
                target="_blank"
                rel="noreferrer"
              >
                {user.instagram_username}
              </a>
              <small className=" opacity-75 block">{likes} Likes</small>
            </article>
          </div>
        </article>
      </div>)}
    </>
  );
}



{/* ...loading skeleton  */}

function SkeletonLoading() {
  return (
    <div className="flex">
        <div className=" relative mb-5 block w-full after:absolute after:inset-0 after:rounded-lg ">
            <div className="h-52  w-full lg:h-80 rounded-3xl  bg-gray-200 "></div>
        </div>
        <div className="p-5 pb-0 flex flex-col md:flex-row items-start md:items-center justify-between">
          <div className='flex items-center justify-center'>
            <div className="w-12 h-12 mr-3 bg-gray-300 rounded-full mb-2"  />
            <div className="w-6 h-4 mt-1 bg-gray-200 " />
                <div className="mt-1 mb-1 space-y-1">
                <div className="w-1/2 h-4 pt-1">
                <div className="w-1/3 h-4 mt-1 bg-gray-200 rounded" />
            </div>
              <div className="w-11/12 h-4 pt-1">
                <div className="h-full bg-gray-200 rounded"></div>
              </div>
              <div className="w-2/3 h-4 pt-1">
                <div className="h-full bg-gray-200 rounded"></div>
              </div>
                </div>
          </div>
        </div>
      
    </div>
  );
}