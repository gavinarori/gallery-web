'use client'
import { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from 'next/navigation'

type Person = {
  name: string;
  photos: {
    [key: string]: {
      raw: any;
      urls: {
        raw: string;
      };
    };
  }[];
};

export default function Profile() {
  const [person, setPerson] = useState<Person>({ name: "", photos: [] });
  const { username } = useParams();

  useEffect(() => {
    const fetchPerson = async () => {
      try {
        const response = await fetch(
          `https://api.unsplash.com/users/${username}?client_id=UEZ2ggGXcymODePcfqH3QTNa3N7FHyko3bRw-lLMzl0`
        );
        const data: Person = await response.json();
        setPerson(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching person data:", error);
      }
    };

    fetchPerson();
  }, [username]);

  return (
    
    <>
      <section className="showcase">
        <div className="overlay relative">
          {person.photos[0]?.urls.raw && (
            <img
              src={person.photos[0].urls.raw}
              alt={person.name}
              className="profile-image object-fit object-cover w-full"
            />
          )}
          <h1 className="absolute bottom-5 left-5 uppercase text-white font-bold tracking-wide text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            {person.name}
          </h1>
        </div>

        <Link
          href="/"
          className="bg-black py-2 px-6 rounded shadow text-white tracking-wide inline-block mt-5"
        >
          &larr; Back
        </Link>
      </section>
    </>
  );
}
