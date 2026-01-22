import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='flex flex-col justify-center items-center gap-4 w-full min-h-screen bg-zinc-900'>
      <h2 className='text-6xl font-medium'>404 - Page Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/" className='inline-flex py-1 px-3 rounded-full bg-amber-600'>Return Home</Link>
    </div>
  );
}
