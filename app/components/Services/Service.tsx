import React, { useState, useEffect } from 'react'
import Modal from '@/app/components/modal/modal';
import {Search} from '@/app/search/Search';
import Article from '@/app/components/Article';
interface ServiceProps {
  searchQuery: string;
}

const tabs = [
  { name: 'profiles', icon: '' }
];

const Service: React.FC<ServiceProps> = ({ searchQuery })=> {
  const [images, setImages] = useState<any[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null); // Track the selected image for the modal



  useEffect(() => {
    const fetchImages = async () => {
      try {
        const randomPage = Math.floor(Math.random() * 10) + 1;
        const response = await fetch(
          `https://api.unsplash.com/photos?page=${randomPage}&query=cats&client_id=UEZ2ggGXcymODePcfqH3QTNa3N7FHyko3bRw-lLMzl0`
        );
        const data = await response.json();
        console.log(data);
        setImages(data);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  const [activeTab, setActiveTab] = useState('Profiles');

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };


   // Function to open the modal with a selected image
   const openModal = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedImage(null);
  };

  const handleSearch = async (query: string) => {
    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=UEZ2ggGXcymODePcfqH3QTNa3N7FHyko3bRw-lLMzl0`
      );
      const data = await response.json();
      console.log(data);
      setImages(data.results);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  return (
    <div className="px-6 py-14 sm:px-10 bg-gray-100">
      <div>
        <h1 className="text-5xl font-bold mt-3">gallery-web</h1>
        <p className="mt-4 max-w-[750px] text-lg text-muted-foreground sm:text-xl">
          An application boilerplate built with a modern stack with a search query. Simple to get
          started building your first social app. Leveraging Unsplash APIs, Lens
          Protocol, Next.js, and tailwindCSS. Tap the picture to open the modal.
          enjoy!
        </p>
        
        
        <div className="mt-6 flex">
        <Search onSearch={handleSearch} />
          <a
            href="https://aave.notion.site/08521d6d8ec84d10bf0f6d03abcf60cc?v=eb989b589d7447918187bf3c588a2748&amp;pvs=4"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
          >
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
              className="h-4 w-4 mr-1"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" x2="22" y1="12" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
            Explore
          </a>
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
          <div className="flex flex-1 flex-wrap p-4">
              <div className="mx-auto max-w-[1990px] bg-gray-100 p-4">
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
            <div key={i} onClick={() => openModal(image.urls.full)}>
              {/* ... (your existing code) */}
              <Article key={i} {...image} />
            </div>
          ))
        ) : (
          <p>Error loading images.</p> // Render an error message
        )}
                     {/* Render the modal if a selected image exists */}
                {selectedImage && (
                  <Modal imageUrl={selectedImage} alt_description={selectedImage} closeModal={closeModal}    />
                )}
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;