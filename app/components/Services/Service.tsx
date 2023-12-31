import React, { useState, useEffect } from 'react'
import {Search} from '@/app/search/Search';
import Article from '@/app/components/Article';
import {
  ChevronLeftIcon,
  ChevronRightIcon
} from "@heroicons/react/24/outline"
import { useToast } from "@/components/ui/use-toast"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog"

import { TbPhotoShare } from 'react-icons/tb';
import { cc } from '@/utility/css';
import { BiCopy } from 'react-icons/bi';
import Image from 'next/image'

interface ServiceProps {
  searchQuery: string;
}

const tabs = [
  { name: 'profiles', icon: '' }
];

const Service: React.FC<ServiceProps> = ({ searchQuery})=> {
  const { toast } = useToast()
  const [images, setImages] = useState<any[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null); // Track the selected image for the modal
  const [currentPage, setCurrentPage] = useState(1); // Initialize with page 1
  const [currentSearchPage, setCurrentSearchPage] = useState(1);
  



  useEffect(() => {
    const fetchImages = async () => {
      try {
        //const randomPage = Math.floor(Math.random() * 10) + 1;
        const response = await fetch(
          `https://api.unsplash.com/photos?page=${currentPage}&query=cats&client_id=UEZ2ggGXcymODePcfqH3QTNa3N7FHyko3bRw-lLMzl0`
        );
        const data = await response.json();
        console.log(data);
        setImages(data);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, [currentPage]);

  const [activeTab, setActiveTab] = useState('Profiles');

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };


  const handleSearch = async (query: string) => {
    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=UEZ2ggGXcymODePcfqH3QTNa3N7FHyko3bRw-lLMzl0`
      );
      const data = await response.json();
      //console.log(data);
      setImages(data.results);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  return (
    <div className="px-6 py-14 sm:px-10 ">
      <div>
        <h1 className="text-5xl font-bold mt-3">gallery-web</h1>
        <p className="mt-4 max-w-[750px] text-lg text-muted-foreground sm:text-xl">
        Introducing our web application, featuring a Theme Provider for a seamless user experience. Share your favorite photos simply by clicking on them. We're also making progress on the music feature. To upload your own pictures, just sign in and follow our user-friendly guide. Our application is built with a modern stack, complete with a robust search query functionality, making it a breeze to start building your very first social app. We leverage Unsplash APIs, the Lens Protocol, Next.js, and tailwindCSS for a cutting-edge experience. Tap any picture to open a modal and enjoy the world of possibilities!
        </p>
        
        
        <div className="mt-6 flex">
        <Search onSearch={handleSearch} />
        </div>
      </div>
      <div className="mt-[70px] flex ml-2">
        <div>
          <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
            My dashboard
          </button>
        </div>
      </div>
      <div className="md:flex min-h-[300px] mt-3">
        <div className="border rounded-tl rounded-bl md:w-[230px] pt-3 px-2 pb-8 flex-col flex">
          <p className="font-medium ml-4 mb-2 mt-1">Social Views</p>
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => handleTabClick(tab.name)}
              className={`${
                
                  'border-black text-black'
                  
              } inline-flex items-center rounded-md text-sm font-medium  transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 px-5 py-2 justify-start mb-1`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5"
                />
              </svg>
              {tab.name}
            </button>
          ))}
        </div>

        {/** Code for various tabs */}
        <div className="sm:border-t sm:border-r sm:border-b rounded-tr rounded-br flex flex-1 pb-4">
          <div className="flex flex-1 flex-wrap p-4 ">
              <div className="mx-auto max-w-[1990px]  p-4">
                <div className="columns-1 gap-4  sm:columns-2 xl:columns-3 2xl:columns-4">
                  <div className="after:content relative mb-5 flex h-[629px] flex-col items-center justify-end gap-4 overflow-hidden rounded-lg bg-gray-100 px-6 pb-16 pt-64 text-center  shadow-highlight after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight bg-vintage lg:pt-0">
                    <div className="absolute inset-0 flex items-center justify-center opacity-20 text-black">
                      <span className="flex max-h-full max-w-full items-center justify-center ">
                      
                        Gallery-web

                      </span>
                      <span className="absolute left-0 right-0 bottom-0 h-[400px] bg-gradient-to-b from-black/0 via-black to-black"></span>
                    </div>
                    <h1 className="mt-8 mb-4 text-base font-bold uppercase tracking-widest">
                      get the latest pictures 
                    </h1>
                    <p className="max-w-[40ch] text-black sm:max-w-[32ch]">
                      This is a website that allows you to view images of your choice from our gallery and also add new photos to it. You can choose between different categories
                    </p>
                  </div>
                  {Array.isArray(images) ? (
          images.map((image, i) => (
<Dialog key={i} >
  <DialogTrigger asChild>
    <div >
      <Article  {...image} blur_hash={image.blur_hash} />
    </div>
  </DialogTrigger>
  <DialogContent className="sm:max-w-[425px]">
    <DialogHeader>
      {/* Add the title here */}
      <h2  >{image.alt_description}</h2>
    </DialogHeader>
    <div className="space-y-3 md:space-y-4 w-full">
      <div className={cc('flex items-center gap-x-3', 'text-xl md:text-3xl leading-snug')}>
        <TbPhotoShare size={22} className="hidden xs:block" />
        <div className="flex-grow"></div>
      </div>
      {/* Display the small image here */}
      
      <div >
      <Image
      src={image.urls.small}
      className='h-52 object-fit object-cover lg:h-80 sm:w-[300px] rounded-3xl transform  transition will-change-auto brightness-125'
      alt={image.alt_description}
      width={300}
      height={350}
      
    />
      </div>
      
      <div
        className={cc(
          'rounded-md',
          'w-full overflow-hidden',
          'flex items-center justify-stretch',
          'border border-gray-200 dark:border-gray-800',
        )}
      >
        <div  className="truncate p-2"
    style={{
    maxWidth: '300px', // Set a maximum width for the URL display
    whiteSpace: 'nowrap', // Prevent text from wrapping
    overflow: 'hidden', // Hide any overflow
    textOverflow: 'ellipsis', // Display ellipsis for overflow text
  }}
>{image.urls.small}</div>
<div
  className={cc(
    'p-3 border-l',
    'border-gray-200 bg-gray-100 active-bg-gray-200',
    'dark:border-gray-800 dark:bg-gray-900 dark:hover-bg-gray-800/75 dark:active-bg-gray-900',
    'cursor-pointer',
  )}
  onClick={() => {
    // Copy the URL to the clipboard using the Clipboard API
    const urlToCopy = image.urls.small;
    navigator.clipboard.writeText(urlToCopy)
      .then(() => {
        // Successfully copied to the clipboard
        toast({
          title: 'Link to photo copied',
          description: 'Share with your friends and family',
        });
      })
      .catch((error) => {
        console.error('Unable to copy to clipboard:', error);
      });
  }}
>
  <BiCopy size={18} />
</div>
      </div>
    </div>
  </DialogContent>
</Dialog>
          ))
        ) : (
           <p>error loading....</p>
        )}
        <div className="mt-10 flex items-center justify-center">
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination">
            <button
              
              onClick={() => {
                if (currentPage > 1) {
                  setCurrentPage(currentPage - 1); // Go to the previous page
                }
              }}
              className="relative inline-flex items-center gap-1 rounded-l-md border border-gray-300 bg-white px-3 py-2 pr-4 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 disabled:pointer-events-none disabled:opacity-40 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300">
              <ChevronLeftIcon
                className="h-3 w-3"
                aria-hidden="true"
              />
              <span>Previous</span>
            </button>
            <button
              onClick={() => {
                setCurrentPage(currentPage + 1); // Go to the next page
              }}
              
              className="relative inline-flex items-center gap-1 rounded-r-md border border-gray-300 bg-white px-3 py-2 pl-4 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 disabled:pointer-events-none disabled:opacity-40 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300">
              <span>Next</span>
              <ChevronRightIcon
                className="h-3 w-3"
                aria-hidden="true"
              />
            </button>
          </nav>
        </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;


