import React, { useState, useEffect } from 'react'
import MusicTab from './songs';

import Article from '@/app/components/Article';

const tabs = [
  { name: 'profiles', icon: '' },
  { name: 'publications', icon: '' },
  { name: 'music', icon: '' },
  { name: 'collect', icon: '' },
];

const Service = () => {
  const [images, setImages] = useState<any[]>([]);


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

  return (
    <div className="px-6 py-14 sm:px-10 bg-gray-100">
      <div>
        <h1 className="text-5xl font-bold mt-3">SourceCode</h1>
        <p className="mt-4 max-w-[750px] text-lg text-muted-foreground sm:text-xl">
          An application boilerplate built with a modern stack. Simple to get
          started building your first social app. Leveraging ShadCN, Lens
          Protocol, Next.js, and WalletConnect.
        </p>
        <div className="mt-6 flex">
          <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 px-4 py-2 mr-3">
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
              <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
              <polyline points="16 6 12 2 8 6"></polyline>
              <line x1="12" x2="12" y1="2" y2="15"></line>
            </svg>
            Share
          </button>
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
                tab.name === activeTab
                  ? 'border-black text-black'
                  : 'border-transparent text-gray-400 cursor-pointer'
              } inline-flex items-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 px-4 py-2 justify-start mb-1`}
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
            {activeTab === 'profiles' && (
              <div className="mx-auto max-w-[1990px] bg-gray-100 p-4">
                <div className="columns-1 gap-4  sm:columns-2 xl:columns-3 2xl:columns-4">
                  <div className="after:content relative mb-5 flex h-[629px] flex-col items-center justify-end gap-4 overflow-hidden rounded-lg bg-slate-600 px-6 pb-16 pt-64 text-center text-black shadow-highlight after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight lg:pt-0">
                    <div className="absolute inset-0 flex items-center justify-center opacity-20">
                      <span className="flex max-h-full max-w-full items-center justify-center">
                        <svg
                          aria-labelledby="conf-city-title"
                          fill="none"
                          role="img"
                          viewBox="0 0 620 704"
                          width="620"
                          height="704"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title id="conf-city-title">
                            Line drawing of the Golden Gate Bridge in San Francisco.
                          </title>
                        </svg>
                      </span>
                      <span className="absolute left-0 right-0 bottom-0 h-[400px] bg-gradient-to-b from-black/0 via-black to-black"></span>
                    </div>
                    <svg
                      aria-labelledby="conf-logo-title-header"
                      fill="none"
                      role="img"
                      viewBox="0 0 172 26"
                      width="172"
                      height="26"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title id="conf-logo-title-header">
                        Next.js Conf logo using a newly designed Next.js logo.
                      </title>
                    </svg>
                    <h1 className="mt-8 mb-4 text-base font-bold uppercase tracking-widest">
                      2022 Event Photos
                    </h1>
                    <p className="max-w-[40ch] text-white/75 sm:max-w-[32ch]">
                      Our incredible Next.js community got together in San
                      Francisco for our first-ever in-person conference!
                    </p>
                    <a className="pointer z-10 mt-6 rounded-lg border border-white bg-white px-3 py-2 text-sm font-semibold text-black transition hover:bg-white/10 hover:text-white md:mt-4">
                      Clone and Deploy
                    </a>
                  </div>
                    {images.map((image,i) => (
                      <Article key={i} {...image} />
                    ))}
              
                </div>
              </div>
            )}
            {activeTab === 'music' && <MusicTab />}
            {activeTab === 'collect' && (
              <div className="mx-auto max-w-[1990px] bg-cyan-800 p-4">
                <div className="columns-1 gap-4  sm:columns-2 xl:columns-3 2xl:columns-4">
                  <div className="after:content relative mb-5 flex h-[629px] flex-col items-center justify-end gap-4 overflow-hidden rounded-lg bg-rose-700 px-6 pb-16 pt-64 text-center text-white/75 shadow-highlight after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight lg:pt-0">
                    <div className="absolute inset-0 flex items-center justify-center opacity-20">
                      <span className="flex max-h-full max-w-full items-center justify-center">
                        <svg
                          aria-labelledby="conf-city-title"
                          fill="none"
                          role="img"
                          viewBox="0 0 620 704"
                          width="620"
                          height="704"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title id="conf-city-title">
                            Line drawing of the Golden Gate Bridge in San Francisco.
                          </title>
                        </svg>
                      </span>
                      <span className="absolute left-0 right-0 bottom-0 h-[400px] bg-gradient-to-b from-black/0 via-black to-black"></span>
                    </div>
                    <svg
                      aria-labelledby="conf-logo-title-header"
                      fill="none"
                      role="img"
                      viewBox="0 0 172 26"
                      width="172"
                      height="26"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title id="conf-logo-title-header">
                        Next.js Conf logo using a newly designed Next.js logo.
                      </title>
                    </svg>
                    <h1 className="mt-8 mb-4 text-base font-bold uppercase tracking-widest">
                      2022 Event Photos
                    </h1>
                    <p className="max-w-[40ch] text-white/75 sm:max-w-[32ch]">
                      Our incredible Next.js community got together in San
                      Francisco for our first-ever in-person conference!
                    </p>
                    <a className="pointer z-10 mt-6 rounded-lg border border-white bg-white px-3 py-2 text-sm font-semibold text-black transition hover:bg-white/10 hover:text-white md:mt-4">
                      Clone and Deploy
                    </a>
                  </div>
                  

            <iframe
                title="Spotify Embed: Recommendation Playlist "
                src={`https://open.spotify.com/embed/playlist/2TDirCU2XThvvMG0Wt3byJ?utm_source=generator&theme=0`}
                width="100%"
                height="100%"
                style={{ minHeight: '360px' }}
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
/>
              
                </div>
              </div>
            )}
            {activeTab === 'publications' && (
              <div className="mx-auto max-w-[1990px] bg-blue-100 p-4">
                <div className="columns-1 gap-4  sm:columns-2 xl:columns-3 2xl:columns-4">
                  <div className="after:content relative mb-5 flex h-[629px] flex-col items-center justify-end gap-4 overflow-hidden rounded-lg bg-rose-700 px-6 pb-16 pt-64 text-center text-white/75 shadow-highlight after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight lg:pt-0">
                    <div className="absolute inset-0 flex items-center justify-center opacity-20">
                      <span className="flex max-h-full max-w-full items-center justify-center">
                        <svg
                          aria-labelledby="conf-city-title"
                          fill="none"
                          role="img"
                          viewBox="0 0 620 704"
                          width="620"
                          height="704"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title id="conf-city-title">
                            Line drawing of the Golden Gate Bridge in San Francisco.
                          </title>
                        </svg>
                      </span>
                      <span className="absolute left-0 right-0 bottom-0 h-[400px] bg-gradient-to-b from-black/0 via-black to-black"></span>
                    </div>
                    <svg
                      aria-labelledby="conf-logo-title-header"
                      fill="none"
                      role="img"
                      viewBox="0 0 172 26"
                      width="172"
                      height="26"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title id="conf-logo-title-header">
                        Next.js Conf logo using a newly designed Next.js logo.
                      </title>
                    </svg>
                    <h1 className="mt-8 mb-4 text-base font-bold uppercase tracking-widest">
                      2022 Event Photos
                    </h1>
                    <p className="max-w-[40ch] text-white/75 sm:max-w-[32ch]">
                      Our incredible Next.js community got together in San
                      Francisco for our first-ever in-person conference!
                    </p>
                    <a className="pointer z-10 mt-6 rounded-lg border border-white bg-white px-3 py-2 text-sm font-semibold text-black transition hover:bg-white/10 hover:text-white md:mt-4">
                      Clone and Deploy
                    </a>
                  </div>
                  

            <iframe
                title="Spotify Embed: Recommendation Playlist "
                src={`https://open.spotify.com/embed/playlist/2TDirCU2XThvvMG0Wt3byJ?utm_source=generator&theme=0`}
                width="100%"
                height="100%"
                style={{ minHeight: '360px' }}
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
/>
              
                </div>
              </div>
            )}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;