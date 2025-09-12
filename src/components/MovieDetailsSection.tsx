import { movieDetails, watchProviders } from '@/types';
import MovieDetailsInnerSection from './MovieDetailsInnerSection';

export default function MovieDetailsSection({
  details,
  watchProviders,
}: {
  details: movieDetails;
  watchProviders: watchProviders;
}) {
  return (
    <>
      <div className='flex flex-col'>
        <div className='flex gap-2 text-3xl'>
          <h3 className='text-white font-bold'>{details?.title}</h3>
          <p className='text-white'>({details?.release_date.split('-')[0]})</p>
        </div>

        <div className='flex gap-2 text-white'>
          <p>{details?.release_date}</p>
          <div className='flex items-center'>
            <svg
              width='15'
              height='15'
              viewBox='0 0 15 15'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M9.875 7.5C9.875 8.81168 8.81168 9.875 7.5 9.875C6.18832 9.875 5.125 8.81168 5.125 7.5C5.125 6.18832 6.18832 5.125 7.5 5.125C8.81168 5.125 9.875 6.18832 9.875 7.5Z'
                fill='currentColor'
              />
            </svg>
          </div>
          <div className='flex gap-2'>
            {details?.genres.map(genre => (
              <p key={genre.name}>{genre.name}</p>
            ))}
          </div>
          <div className='flex items-center'>
            <svg
              width='15'
              height='15'
              viewBox='0 0 15 15'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M9.875 7.5C9.875 8.81168 8.81168 9.875 7.5 9.875C6.18832 9.875 5.125 8.81168 5.125 7.5C5.125 6.18832 6.18832 5.125 7.5 5.125C8.81168 5.125 9.875 6.18832 9.875 7.5Z'
                fill='currentColor'
              />
            </svg>
          </div>
          <p>{details?.runtime}min</p>
        </div>
        <div className='text-xl text-white my-4'>
          Average raiting: {(details?.vote_average * 10).toFixed()}%
        </div>
        <div className='text-white italic mb-2'>{details?.tagline}</div>
        <div>
          <h5 className='text-white font-medium'>Description</h5>
          <p className='text-white'>{details?.overview}</p>
        </div>
        <MovieDetailsInnerSection watchProviders={watchProviders} />
      </div>
    </>
  );
}
