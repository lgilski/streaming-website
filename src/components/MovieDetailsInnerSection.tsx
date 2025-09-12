import { watchProviders } from '@/types';
import Image from 'next/image';

// TO REFACTOR

export default function MovieDetailsInnerSection({
  watchProviders,
}: {
  watchProviders: watchProviders;
}) {
  return (
    <section className='flex flex-col mt-auto text-white font-semibold'>
      {watchProviders && (
        <>
          {watchProviders.buy && (
            <div>
              <p>Buy on:</p>
              <div className='flex gap-2'>
                {watchProviders.buy?.map(element => {
                  return (
                    <div key={element.provider_name} className='max-w-20'>
                      <Image
                        alt=''
                        width={50}
                        height={50}
                        src={
                          'https://image.tmdb.org/t/p/w500' + element.logo_path
                        }
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          {watchProviders.rent && (
            <div>
              <p>Rent on:</p>
              <div className='flex gap-2'>
                {watchProviders.rent?.map(element => {
                  return (
                    <div key={element.provider_name} className='max-w-20'>
                      <Image
                        alt=''
                        width={50}
                        height={50}
                        src={
                          'https://image.tmdb.org/t/p/w500' + element.logo_path
                        }
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          {watchProviders.flatrate && (
            <div>
              <p>Flatrate on:</p>
              <div className='flex gap-2'>
                {watchProviders.flatrate.map(element => {
                  return (
                    <div key={element.provider_name} className='max-w-20'>
                      <Image
                        alt='logo'
                        width={50}
                        height={50}
                        src={
                          'https://image.tmdb.org/t/p/w500' + element.logo_path
                        }
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </>
      )}
      {!watchProviders && (
        <p>There is no platform in Poland to watch this movie at the moment.</p>
      )}
    </section>
  );
}
