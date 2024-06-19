import React, { useState, useEffect } from 'react';
import { Search } from '@/app/search/Search';
import Article from '@/app/components/Article';
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { useToast } from "@/components/ui/use-toast";
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from "@/components/ui/dialog";
import { TbPhotoShare } from 'react-icons/tb';
import { cc } from '@/utility/css';
import { BiCopy } from 'react-icons/bi';
import Image from 'next/image';
import { decode } from 'blurhash';

interface ServiceProps {
  searchQuery: string;
}

const tabs = [
  { name: 'profiles', icon: '' }
];

export const getBase64BlurHash = (blurHash: string, width: number, height: number): string => {
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

const Service: React.FC<ServiceProps> = ({ searchQuery }) => {
  const { toast } = useToast();
  const [images, setImages] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(
          `https://api.unsplash.com/photos?page=${currentPage}&query=cats&client_id=UEZ2ggGXcymODePcfqH3QTNa3N7FHyko3bRw-lLMzl0`
        );
        const data = await response.json();
        setImages(data);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, [currentPage]);

  const handleSearch = async (query: string) => {
    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=UEZ2ggGXcymODePcfqH3QTNa3N7FHyko3bRw-lLMzl0`
      );
      const data = await response.json();
      setImages(data.results);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  const download = (imageUrl: string) => {
    fetch(imageUrl)
      .then(async response => {
        // Get the file extension from the URL
        const contentDisposition = response.headers.get('content-disposition');
        let fileName = 'downloaded-image';
        if (contentDisposition) {
          const fileNameMatch = contentDisposition.match(/filename="?(.+)"?/);
          if (fileNameMatch?.[1]) {
            fileName = fileNameMatch[1];
          }
        } else {
          const urlParts = imageUrl.split('/');
          const lastPart = urlParts[urlParts.length - 1];
          const urlFileName = lastPart.split('?')[0]; // Remove any query parameters
          if (urlFileName) {
            fileName = urlFileName;
          }
        }
        
        const blob = await response.blob();
        const fileExtension = blob.type.split('/')[1] || 'png';
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = `${fileName}.${fileExtension}`;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
      }).then(() => {
        // Successfully downloaded to the gallery
        toast({
          title: 'photo downloaded successfully, enjoy!',
          description: 'Share with your friends and family',
        });
      })
      .catch(error => console.error('Image download failed', error));
      
  };

  return (
    <div className="px-6 py-14 sm:px-10">
      <div>
        <h1 className="text-5xl font-bold mt-3">gallery-web</h1>
        <p className="mt-4 max-w-[750px] text-lg text-muted-foreground sm:text-xl">
          Introducing our web application, featuring a Theme Provider for a seamless user experience. Share your favorite photos simply by clicking on them. We're also making progress on the music feature. To upload your own pictures, just sign in and follow our user-friendly guide. Our application is built with a modern stack, complete with a robust search query functionality, making it a breeze to start building your very first social app. We leverage Unsplash APIs, the Lens Protocol, Next.js, and tailwindCSS for a cutting-edge experience. Tap any picture to open a modal and enjoy the world of possibilities!
        </p>
        <div className="mt-6 flex">
          <Search onSearch={handleSearch} />
        </div>
      </div>
      <div className="md:flex mt-3 sm:border-t sm:border-r sm:border-b rounded-tr rounded-br flex flex-1 pb-4">
        <div className="flex flex-1 pb-4">
          <div className="flex flex-1 flex-wrap">
            <div className="mx-auto max-w-[1990px]">
              <div className="columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4">
                {Array.isArray(images) ? (
                  images.map((image, i) => {
                    const placeholder = getBase64BlurHash(image.blur_hash, 32, 32); // Adjust width and height as needed
                    return (
                      <Dialog key={i}>
                        <DialogTrigger asChild>
                          <div>
                            <Article id={image.id}  />
                          </div>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                          <DialogHeader>
                            <h2>{image.alt_description}</h2>
                          </DialogHeader>
                          <div className="space-y-3 md:space-y-4 w-full">
                            <div className={cc('flex items-center gap-x-3', 'text-xl md:text-3xl leading-snug')}>
                              <TbPhotoShare size={22} className="hidden xs:block" />
                              <div className="flex-grow"></div>
                            </div>
                            <div className="flex justify-center items-center">
                              <Image
                                src={image.urls.small}
                                placeholder="blur"
                                blurDataURL={placeholder}
                                className="h-52 object-fit object-cover lg:h-80 sm:w-[300px] rounded-3xl transform transition will-change-auto brightness-125"
                                alt={image.alt_description}
                                width={300}
                                height={350}
                              />
                            </div>
                            <div className={cc('rounded-md', 'w-auto overflow-hidden', 'flex items-center justify-stretch', 'border border-gray-200 dark:border-gray-800')}>
                              <div className="truncate p-2"
                                style={{
                                  maxWidth: '250px',
                                  whiteSpace: 'nowrap',
                                  overflow: 'hidden',
                                  textOverflow: 'ellipsis',
                                }}>
                                {image.urls.small}
                              </div>
                              <div className={cc('p-3 border-l', 'border-gray-200 bg-gray-100 active-bg-gray-200', 'dark:border-gray-800 dark:bg-gray-900 dark:hover-bg-gray-800/75 dark:active-bg-gray-900', 'cursor-pointer')}
                                onClick={() => {
                                  navigator.clipboard.writeText(image.urls.small)
                                    .then(() => {
                                      toast({
                                        title: 'Link to photo copied',
                                        description: 'Share with your friends and family',
                                      });
                                    })
                                    .catch((error) => {
                                      console.error('Unable to copy to clipboard:', error);
                                    });
                                }}>
                                <BiCopy size={18} />
                              </div>
                              <div className={cc('p-3 border-l', 'border-gray-200 bg-gray-100 active-bg-gray-200', 'dark:border-gray-800 dark:bg-gray-900 dark:hover-bg-gray-800/75 dark:active-bg-gray-900', 'cursor-pointer')}
                                onClick={() => download(image.urls.full)}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-4">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    );
                  })
                ) : (
                  <p>error loading....</p>
                )}
                <div className="mt-10 flex items-center justify-center">
                  <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                    <button
                      onClick={() => {
                        if (currentPage > 1) {
                          setCurrentPage(currentPage - 1);
                        }
                      }}
                      className="relative inline-flex items-center gap-1 rounded-l-md border border-gray-300 bg-white px-3 py-2 pr-4 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 disabled:pointer-events-none disabled:opacity-40 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300">
                      <ChevronLeftIcon className="h-3 w-3" aria-hidden="true" />
                      <span>Previous</span>
                    </button>
                    <button
                      onClick={() => {
                        setCurrentPage(currentPage + 1);
                      }}
                      className="relative inline-flex items-center gap-1 rounded-r-md border border-gray-300 bg-white px-3 py-2 pl-4 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 disabled:pointer-events-none disabled:opacity-40 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300">
                      <span>Next</span>
                      <ChevronRightIcon className="h-3 w-3" aria-hidden="true" />
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
