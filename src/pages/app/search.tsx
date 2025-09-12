import MoviesGrid from '@/components/MoviesGrid';
import { useRouter } from 'next/router';
import { useRef } from 'react';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NGE4OTMzZjFkZWU1MjljZWQ0MDZjNzViMWZmZTk1MSIsInN1YiI6IjY2MzQ4OWJkZTkyZDgzMDEyYWQyOTE5ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rZTKyMZwlXDFsEA1KI6u2JZ82SrIZL6jWy_bqd7Jdb8',
  },
};

export const getServerSideProps = async ({ query }) => {
  console.log('Searched::::', query.searched);

  try {
    const movieSearchResponse = await fetch(
      'https://api.themoviedb.org/3/search/movie?query=%27' +
        query.searched.replace(' ', '%20') +
        '%27',
      options
    );

    const movieSearch = await movieSearchResponse.json();

    return {
      props: {
        movieSearch,
        searchedFor: query.searched,
      },
    };
  } catch (error) {
    console.error(error);
  }
};

export default function SearchResults({ movieSearch, searchedFor }) {
  console.log(movieSearch);

  const router = useRouter();

  const input = useRef<HTMLInputElement>(null);

  function Search(e: any) {
    e.preventDefault();

    router.push({
      pathname: '/app/search/',
      query: { searched: input.current?.value },
    });
    // input.current?.value = undefined;
  }

  return (
    <section className='max-w-7xl mx-auto my-8 flex flex-col gap-16'>
      <form onSubmit={Search} className='flex justify-center gap-2 mt-2'>
        <input
          ref={input}
          className='p-2 rounded-lg border-pink-vivid-100 shadow-md w-60'
          placeholder='Type to find movies...'
        />
        <button
          type='submit'
          className='bg-pink-vivid-200  h-full rounded-lg shadow-md hover:bg-pink-vivid-300 duration-200'
        >
          <svg
            className='p-1'
            width='40'
            height='40'
            viewBox='0 0 15 15'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z'
              fill='currentColor'
              fill-rule='evenodd'
              clip-rule='evenodd'
            />
          </svg>
        </button>
      </form>
      <MoviesGrid
        movies={movieSearch}
        title={`Searched results for: ${searchedFor}`}
      />
    </section>
  );
}
