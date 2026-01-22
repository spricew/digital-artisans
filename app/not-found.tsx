import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Not Found",
};


import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='flex flex-col justify-center items-center gap-4 w-full min-h-screen bg-[#18120c]'>
      <h2 className='text-6xl font-medium text-onPrimaryContainer'>404 - Page Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/" className='inline-flex py-2 px-4 rounded-full bg-onPrimary font-semibold text-onPrimaryContainer'>
      Return Home
      <ChevronRight size={25} strokeWidth={2.2} />
      </Link>
    </div>
  );
}
