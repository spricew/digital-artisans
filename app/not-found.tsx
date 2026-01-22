import type { Metadata } from "next";

// titulo de la pestaña jeje
export const metadata: Metadata = {
  title: "Not Found",
};

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import ErrorImg from "./components/ui/errorImg";
import notFoundImg from '@/public/notFound.png'

export default function NotFound() {
  return (
    <div className='flex flex-col justify-center items-center gap-6 w-full min-h-screen bg-[#18120c]'>
      <ErrorImg imagesrc={notFoundImg} />
      <h2 className='text-6xl font-medium text-onPrimaryContainer'>404 - Page Not Found</h2>
      <p className="squircle max-w-2xl text-center text-balance leading-7 p-6 bg-surfaceContainerHigh rounded-lg">
        Ups... no pudimos encontrar la página que buscas. Es posible que la dirección esté
        incorrecta o que la página haya sido movida.
      </p>
      <Link href="/" className='inline-flex py-2 px-4 rounded-full bg-onPrimary font-semibold text-onPrimaryContainer'>
        Return Home
        <ChevronRight size={25} strokeWidth={2.2} />
      </Link>
    </div>
  );
}
