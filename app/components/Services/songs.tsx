
import React, { useEffect, useState } from 'react';

const MusicTab: React.FC = () => {
  const [tracks, setTracks] = useState<any[]>([]); // Change the type to 'any[]' to store track data
  const token = 'BQDmLouH2RPToagwTxLaHD8eYTcBb_tktO-zATt8chohMWvXBH3xDvn966qxQrlZQ1a5Xk3bgPQP1L4oEsAAb7rfXY03clfKgdlv6cpkhhKCvcprxOUwdUfCCPnbRhpKNs7gTZF3WRGiu-v5YoRNTx6CQU8oe309huQdRoGuAG8yZ6qBNbsIWK8FHGCVbBMzG07gegZ6WxIEWFCFB4GA6kPf5C_RuMyuYTW3Hqv389lYmnxvE6cd-2l1poYhHC5uWSS-m79ZQbY98D7M394aTHja';

  useEffect(() => {
    // Fetch your Spotify tracks here and update the 'tracks' state
    const fetchSpotifyTracks = async () => {
      try {
        const response = await fetch(
          'https://api.spotify.com/v1/me/tracks?grant_type=client_credentials&client_id=85d939afedc144898342fdd78239027c&client_secret=b5065fe1df314883ac6b75ae096d6723',
          {
            headers: {
              Authorization: `Bearer ${token}`, // Use the provided token
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          setTracks(data.items);
        } else {
          console.error('Error fetching Spotify tracks');
        }
      } catch (error) {
        console.error('Error fetching Spotify tracks:', error);
      }
    };

    fetchSpotifyTracks();
  }, []);

  return (
    <div className="mx-auto max-w-[1990px] bg-rose-300 p-4">
      {/* Render your music content here */}
      <h1 className="mt-8 mb-4 text-base font-bold uppercase tracking-widest">
        My Spotify Tracks
      </h1>
      <div className="flex flex-wrap">
        {tracks.map((track) => (
          <div key={track.track.id} className="w-1/2 md:w-1/3 lg:w-1/4 p-4">
            <iframe
              title={track.track.name}
              src={`https://open.spotify.com/embed/track/${track.track.id}`}
              width="100%"
              height="80"
              frameBorder="0"
              allow="encrypted-media"
            ></iframe>
            <p className="mt-2 text-center">{track.track.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MusicTab;
