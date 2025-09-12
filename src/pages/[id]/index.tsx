import MovieCast from '@/components/MovieCast';
import MovieDetailsInnerSection from '@/components/MovieDetailsInnerSection';
import MovieDetailsSection from '@/components/MovieDetailsSection';
import MovieOtherInfo from '@/components/MovieOtherInfo';
import MovieVideos from '@/components/MovieVideos';
import {
  movieCredits,
  movieDetails,
  movieVideos,
  moviesList,
  watchProviders,
} from '@/types';
import { GetStaticPaths, GetStaticProps } from 'next';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import Image from 'next/image';
import Link from 'next/link';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NGE4OTMzZjFkZWU1MjljZWQ0MDZjNzViMWZmZTk1MSIsInN1YiI6IjY2MzQ4OWJkZTkyZDgzMDEyYWQyOTE5ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rZTKyMZwlXDFsEA1KI6u2JZ82SrIZL6jWy_bqd7Jdb8',
  },
};

export const getStaticPaths = async () => {
  const response = await fetch(
    'https://api.themoviedb.org/3/trending/movie/week?language=en-US',
    options
  );

  const movies: moviesList = await response.json();

  const paths = movies.results.map(movie => {
    return { params: { id: movie.id.toString() } };
  });

  return {
    paths,
    fallback: true, // false or "blocking"
  };
};

export const getStaticProps = async ({ params }: Params) => {
  try {
    const detailsResponse = await fetch(
      'https://api.themoviedb.org/3/movie/' + params.id + '?language=en-US',
      options
    );
    const details: movieDetails = await detailsResponse.json();

    const videosResponse = await fetch(
      'https://api.themoviedb.org/3/movie/' +
        params.id +
        '/videos?language=en-US',
      options
    );

    const videos: movieVideos = await videosResponse.json();

    const creditsResponse = await fetch(
      'https://api.themoviedb.org/3/movie/' +
        params.id +
        '/credits?language=en-US',
      options
    );

    const credits: movieCredits = await creditsResponse.json();

    const watchProvidersRsponse = await fetch(
      'https://api.themoviedb.org/3/movie/' + params.id + '/watch/providers',
      options
    );

    const watchProviders = await watchProvidersRsponse.json();

    return {
      props: {
        details,
        videos,
        credits,
        watchProviders: watchProviders.results?.PL
          ? watchProviders.results?.PL
          : null,
      },
    };
  } catch (error) {
    console.error(error);
  }
};

export default function MovieDetails({
  details,
  videos,
  credits,
  watchProviders,
}: {
  details: movieDetails;
  videos: movieVideos;
  credits: movieCredits;
  watchProviders: watchProviders;
}) {
  console.log(details, videos, credits, watchProviders);

  const videosToDisplay = videos?.results.filter(
    video => video.official === true && video.site === 'YouTube'
  );

  return (
    <>
      <section className='relative max-w-7xl mx-auto p-4 mt-8 bg-white shadow-md rounded-lg overflow-hidden'>
        <div className='absolute content-[""] top-0 left-0 w-full h-full z-[2] bg-gray-800 opacity-80' />
        <Image
          alt='background'
          className='rounded-lg absolute top-0 left-0 z-[1] max-w-7xl aspect-auto'
          sizes='100vw'
          fill
          objectFit={'cover'}
          // width={400}
          // height={100}
          src={'https://image.tmdb.org/t/p/w1280' + details?.backdrop_path}
        />
        <div className='flex gap-8 z-30 relative'>
          <Image
            // fill
            className='rounded-lg'
            sizes='100vw'
            width={400}
            height={100}
            src={'https://image.tmdb.org/t/p/w500' + details?.poster_path}
            // src={'https://image.tmdb.org/t/p/w500' + details.backdrop_path}
            alt=''
          />
          <MovieDetailsSection
            details={details}
            watchProviders={watchProviders}
          />
        </div>
      </section>
      <div className='flex mx-auto max-w-7xl'>
        <div>
          {videosToDisplay && videosToDisplay?.length > 0 && (
            <MovieVideos videos={videosToDisplay} />
          )}
          <MovieCast credits={credits} />
        </div>
        <MovieOtherInfo details={details} />
      </div>
    </>
  );
}
