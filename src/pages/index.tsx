import cinema from '@/assets/myke-simon-atsUqIm3wxo-unsplash.jpg';
import movieTape from '@/assets/anika-de-klerk-dWYjy9zIiF8-unsplash.jpg';

// import { TmdbClient } from 'tmdb-js-wrapper';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import Image from 'next/image';

import Marquee from 'react-fast-marquee';

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    console.log(session);
    if (session) router.push('/app');
  }, [session]);

  return (
    <>
      <section className='mx-auto h-[600px] flex items-center bg-gradient-to-b from-pink-vivid-100 from-20% via-pink-vivid-050 via-90% to-transparent'>
        <div className='mx-auto text-center relative'>
          <Image
            alt='cinema image'
            src={cinema}
            width={300}
            height={100}
            className='absolute -top-20 -left-[340px] duration-300 -rotate-12 rounded-md hover:-translate-x-10 hover:-translate-y-2 hover:-rotate-[17deg] shadow-md'
          />
          <Image
            alt='movie tape'
            src={movieTape}
            width={300}
            height={100}
            className='absolute -top-10 -right-[340px] rotate-12 rounded-md shadow-md'
          />
          <h1 className='text-6xl font-semibold mb-4'>
            Welcome to <span className='text-pink-vivid-500'>Film</span>
            Tube
          </h1>
          <p className='max-w-lg mx-auto text-lg font-medium text-pink-800'>
            Here you will find information about movies. When they are played,
            where to watch and more!
          </p>
        </div>
      </section>
      {/* <Marquee autoFill className='max-w-7xl mx-auto my-8'>
        <div className='p-4'>uwu</div>
        <div className='p-4'>owo</div>
        <div className='p-4'>OMO</div>
      </Marquee> */}
      <section className='max-w-7xl mx-auto my-8 grid grid-cols-2 gap-8'>
        <div className='flex'>
          <div>
            <h3 className='text-4xl font-medium mb-4'>Come right in!</h3>
            <p className='text-lg'>
              Here you will get all informations that you need! Including when
              the movie is coming out, on which platforms it is avalable to
              watch at home and more!
            </p>
          </div>
        </div>
        <div>aa</div>
        <div></div>
        <div className='flex'>
          <div>
            <h3 className='text-4xl font-medium mb-4'>
              You will know who played main characters
            </h3>
            <p className='text-lg'>
              Here you will get all informations that you need! Including when
              the movie is coming out, on which platforms it is avalable to
              watch at home and more!
            </p>
          </div>
        </div>
        <div className='flex'>
          <div>
            <h3 className='text-4xl font-medium mb-4'>Available trailers</h3>
            <p className='text-lg'>
              You can see official trailers and behind the scens videos for the
              movies that you are interested in
            </p>
          </div>
        </div>
        <div></div>
      </section>
    </>
  );
}
