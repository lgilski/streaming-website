import { video } from '@/types';

export default function MovieVideos({ videos }: { videos: video[] }) {
  return (
    <section className='max-w-5xl mt-12'>
      <h6 className='text-2xl font-semibold text-cool-grey-800 mb-4 pl-6'>
        Official videos
      </h6>
      <div className='relative'>
        <div className='absolute h-[calc(100%-24px)] w-8 top-0 right-0 bg-gradient-to-r from-transparent to-cool-grey-050 z-[3] ' />
        <div className='flex gap-4 scrollbar-thin overflow-x-auto scrollbar-thumb-cool-grey-400 scrollbar-track-transparent scrollbar-thumb-rounded-full scrollbar-track-rounded-full pb-4 px-6'>
          {videos.slice(-7).map(video => (
            <iframe
              allowFullScreen
              loading='lazy'
              key={video.id}
              width='500'
              height='315'
              src={'https://www.youtube.com/embed/' + video.key}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
