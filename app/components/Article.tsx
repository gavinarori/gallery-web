'use client'
import { format } from 'date-fns';
import Link from 'next/link';
import React, { useState, useEffect } from 'react'
import { decode } from 'blurhash';


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
  blur_hash:string;
  created_at: string;
  likes: number;
};

export default function Article({ id, urls, user, created_at, likes, blur_hash  }: ArticleProps) {
  
  const [isLoading, setIsLoading] = useState(true);


  
  setTimeout(() => {
    setIsLoading(false);
  }, 2000);

  return (
    <>
     {isLoading ? ( 
        <div className="p-4 rounded-3xl mb-4 gap-2 shadow-md  animate-pulse ">
          <SkeletonLoading />
        </div>
      ) : (
      <div className="rounded-3xl p-5 mb-4 gap-2 mt-4 shadow-xl flex flex-1 flex-wrap dark:bg-accent">
        
        <article key={id} className="rounded-3xl ">
        <div className="after:content group relative mb-5 w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight hover:scale-110 ease-in-out delay-150 hover:-translate-y-1 hover:transition-transform">
        <img
          src={urls.regular}
          alt={user.username}
          className="h-auto w-auto object-fit object-cover rounded-3xl transform brightness-90 transition will-change-auto group-hover:brightness-125"
              />
        </div>
        <div className="px-4 py-3 w-72">
        <Link href='/components/splash'>
              <img
                src={user.profile_image.medium}
                alt={user.username}
                className="rounded-full mr-2 w-10 md:w-auto"
              />
              </Link>
                <span className=" mr-3  text-xs"><a
                href={`https://instagram.com/${user.instagram_username}`}
                className="text-sm "
                target="_blank"
                rel="noreferrer"
              >
                {user.instagram_username}
              </a></span>
                <p className="text-lg font-bold  truncate block capitalize">{user.name}</p>
                <div className="flex items-center">
                  <p className="text-lg font-semibold cursor-auto my-3">{format(new Date(created_at), 'dd MMMM yyyy')}</p>
                  <div className="ml-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
</svg>
                  {likes} Likes
                  </div>
                </div>
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