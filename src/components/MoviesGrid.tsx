import { movie } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

export default function MoviesGrid({
  movies,
  title,
  numberToDisplay,
}: {
  title: string;
  movies: {
    page: number;
    results: movie[];
    total_pages: number;
    total_results: number;
  };
  numberToDisplay?: number;
}) {
  return (
    <section className='p-6 '>
      <h4 className='text-2xl font-bold text-cool-grey-800 pt-2 pb-6'>
        {title}
      </h4>
      <div className='grid grid-cols-5 gap-5'>
        {movies.results
          ?.slice(0, numberToDisplay ? numberToDisplay : movies.results.length)
          .map((movie: any) => {
            return (
              <Link
                href={`/${movie.id}`}
                key={movie.title}
                className='relative hover:-translate-y-2 duration-200'
              >
                <Image
                  // fill
                  className='rounded-md h-auto'
                  sizes='100vw'
                  width={400}
                  height={100}
                  src={'https://image.tmdb.org/t/p/w500' + movie.poster_path}
                  // src={'https://image.tmdb.org/t/p/w500' + movie.backdrop_path}
                  alt=''
                />
                <p className='text-sm mt-2 font-medium'>{movie.title}</p>
              </Link>
            );
          })}
      </div>
    </section>
  );
}
