import MoviesGrid from '@/components/MoviesGrid';
import { moviesDataFromAPI } from '@/types';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NGE4OTMzZjFkZWU1MjljZWQ0MDZjNzViMWZmZTk1MSIsInN1YiI6IjY2MzQ4OWJkZTkyZDgzMDEyYWQyOTE5ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rZTKyMZwlXDFsEA1KI6u2JZ82SrIZL6jWy_bqd7Jdb8',
  },
};

export const getStaticProps = async () => {
  try {
    const nowPlayingResponse = await fetch(
      'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',
      options
    );
    const nowPlaying = await nowPlayingResponse.json();

    return {
      props: {
        nowPlaying,
      },
      revalidate: 60,
    };
  } catch (error) {
    console.error(error);
  }
};

export default function NowPlayingPage({
  nowPlaying,
}: {
  nowPlaying: moviesDataFromAPI;
}) {
  return (
    <section className='max-w-7xl mx-auto my-8 flex flex-col gap-16'>
      <MoviesGrid movies={nowPlaying} title='Now playing' />
    </section>
  );
}
