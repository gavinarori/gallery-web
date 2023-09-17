'use client'
import { format } from 'date-fns';
import Link from 'next/link';

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
  return (
    <>
      <div className="p-5 rounded-3xl mb-4 gap-2 shadow-md bg-gray-100">
        
        <article key={id} className="rounded-3xl">
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
                <li className="text-slate-800 font-bold">{user.name}</li>
                <li className="text-sm text-slate-800 opacity-75">
                  {format(new Date(created_at), 'dd MMMM yyyy')}
                </li>
              </ul>
            </article>

            <article className="mt-5 md:mt-0">
              <a
                href={`https://instagram.com/${user.instagram_username}`}
                className="text-sm text-slate-800 opacity-75 underline"
                target="_blank"
                rel="noreferrer"
              >
                {user.instagram_username}
              </a>
              <small className="text-slate-800 opacity-75 block">{likes} Likes</small>
            </article>
          </div>
        </article>
      </div>
    </>
  );
}
