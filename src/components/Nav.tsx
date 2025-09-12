import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

export default function Nav() {
  const { data: session } = useSession();

  return (
    <nav className='px-6 py-2 bg-white shadow-sm flex justify-between items-baseline'>
      <div className='w-40'>
        <Link href={session ? '/app' : '/'} className='text-2xl font-semibold '>
          <span className='text-pink-vivid-500'>Film</span>
          Tube
        </Link>
      </div>
      {session && (
        <div className='flex gap-5'>
          <Link className='text-lg font-medium ' href={'/app/trending'}>
            Trending
          </Link>
          <Link className='text-lg font-medium ' href={'/app/upcoming'}>
            Upcoming
          </Link>
          <Link className='text-lg font-medium ' href={'/app/now-playing'}>
            Now playing
          </Link>
        </div>
      )}
      <div className='flex gap-5 w-40 justify-end'>
        <button
          className='text-lg font-medium'
          onClick={
            session
              ? () => {
                  signOut({ callbackUrl: '/' });
                }
              : () => signIn()
          }
        >
          {session ? 'Sign out' : 'Sign in'}
        </button>
      </div>
    </nav>
  );
}

// if (session) {
//   return (
//     <>
//       Signed in as {session.user?.email} <br />
//       <button onClick={() => signOut()}>Sign out</button>
//     </>
//   );
// }
// return (
//   <>
//     Not signed in <br />
//     <button onClick={() => signIn()}>Sign in</button>
//   </>
// );
