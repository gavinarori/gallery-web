'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { decode } from 'blurhash';


type User = {
  username: string;
  name: string;
  profile_image: {
    medium: string;
  };
  instagram_username: string;
};

type ImageData = {
  id: string;
  urls: {
    regular: string;
  };
  user: User;
  blur_hash: string;
  created_at: string;
  likes: number;
  alt_description: string;
};

type ArticleProps = {
  id: string;
};

const getBase64BlurHash = (blurHash: string, width: number, height: number): string => {
  const pixels = decode(blurHash, width, height);
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');

  if (!ctx) {
    throw new Error('Failed to get 2D context');
  }

  const imageData = ctx.createImageData(width, height);
  imageData.data.set(pixels);
  ctx.putImageData(imageData, 0, 0);

  return canvas.toDataURL();
};

const Article: React.FC<ArticleProps> = ({ id }) => {
  const [imageData, setImageData] = useState<ImageData | null>(null);
  const [placeholder, setPlaceholder] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchImageData = async () => {
      try {
        const response = await fetch(
          `https://api.unsplash.com/photos/${id}?client_id=UEZ2ggGXcymODePcfqH3QTNa3N7FHyko3bRw-lLMzl0`
        );
        const data: ImageData = await response.json();
        setImageData(data);

        const placeholder = getBase64BlurHash(data.blur_hash, 32, 32);
        setPlaceholder(placeholder);

        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching image data:', error);
      }
    };

    fetchImageData();
  }, [id]);

  if (isLoading || !imageData) {
    return <SkeletonLoading />;
  }

  return (
    <div className="rounded-3xl p-5 mb-4 gap-2 mt-4 shadow-xl flex flex-1 flex-wrap dark:bg-accent">
      <article key={imageData.id} className="rounded-3xl">
        <div className="after:content group relative mb-5 w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight hover:scale-110 ease-in-out delay-150 hover:-translate-y-1 hover:transition-transform">
          <Image
            src={imageData.urls.regular}
            alt={imageData.alt_description}
            className="h-auto w-auto object-fit object-cover rounded-3xl transform brightness-90 transition will-change-auto group-hover:brightness-125"
            placeholder="blur"
            blurDataURL={placeholder}
            width={500}
            height={500}
          />
        </div>
        <div className="px-4 py-3 w-72">
          <div>
            <img
              src={imageData.user.profile_image.medium}
              alt={imageData.user.username}
              className="mr-3 h-12 w-12 rounded-full bg-white dark:bg-gray-800"
            />
            <div className="flex flex-col justify-center">
              <div className="flex">
                <h5 className="mb-1 font-bold text-black dark:text-white">
                  {imageData.user.name}
                </h5>
                <h5 className="mb-1 font-bold text-black dark:text-white">
                  {imageData.likes}
                </h5>
              </div>
              <span className="text-sm text-gray-700 dark:text-gray-400">
                @{imageData.user.instagram_username || imageData.user.username}
              </span>
              <span className="text-sm text-gray-700 dark:text-gray-400">
                {new Date(imageData.created_at).toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Article;




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