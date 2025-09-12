import { movieDetails } from '@/types';
import Link from 'next/link';

export default function MovieOtherInfo({ details }: { details: movieDetails }) {
  return (
    <section className='max-w-80 pl-8 mt-12'>
      {/* <h6 className='text-xl font-semibold text-cool-grey-800 mb-4 text-center'>
        Other info
      </h6> */}
      <div className='flex flex-col gap-5'>
        <div>
          <p className='text-cool-grey-800 font-semibold'>Original title:</p>
          <p className='text-cool-grey-900'>{details?.original_title}</p>
        </div>
        <div>
          <p className='text-cool-grey-800 font-semibold'>Homepage link:</p>
          {details?.homepage && (
            <Link
              href={details?.homepage}
              className='text-cool-grey-900 underline'
            >
              LINK
            </Link>
          )}
        </div>
        <div>
          <p className='text-cool-grey-800 font-semibold'>Original language:</p>
          <p className='text-cool-grey-900'>
            {details?.original_language &&
              new Intl.DisplayNames(['en'], { type: 'language' }).of(
                details?.original_language
              )}
          </p>
        </div>
        <div>
          <p className='text-cool-grey-800 font-semibold'>Origin country:</p>
          {details?.origin_country.map(country => (
            <p key={country} className='text-cool-grey-900'>
              {new Intl.DisplayNames(['en'], { type: 'region' }).of(country)}
            </p>
          ))}
        </div>
        <div>
          <p className='text-cool-grey-800 font-semibold'>
            Production companies:
          </p>
          {details?.production_companies.map(company => (
            <p key={company.id} className='text-cool-grey-900'>
              {company.name}
            </p>
          ))}
        </div>
        <div>
          <p className='text-cool-grey-800 font-semibold'>Status:</p>
          <p className='text-cool-grey-900'>{details?.status}</p>
        </div>
        <div>
          <p className='text-cool-grey-800 font-semibold'>Budget:</p>
          <p className='text-cool-grey-900'>
            ${new Intl.NumberFormat('de-DE').format(details?.budget)}
          </p>
        </div>
        <div>
          <p className='text-cool-grey-800 font-semibold'>Revenue:</p>
          <p className='text-cool-grey-900'>
            ${new Intl.NumberFormat('de-DE').format(details?.revenue)}
          </p>
        </div>
      </div>
    </section>
  );
}
