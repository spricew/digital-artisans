import type { Metadata } from "next";

// titulo de la pestaña jeje
export const metadata: Metadata = {
  title: "Not Found",
};

import { ChevronRight } from 'lucide-react';
import ErrorImg from "./components/ui/ErrorImg";
import notFoundImg from '@/public/notFound.png'
import PrimaryButton from "./components/ui/PrimaryButton";

export default function NotFound() {
  return (
    <div className='flex flex-col justify-center items-center gap-3 w-full h-full'>
      {/* <ErrorImg imagesrc={notFoundImg} /> */}
      <h2 className='text-6xl font-bold tracking-tighter text-onBackground px-5'>Página no encontrada...</h2>
      <p className="squircle max-w-xl p-6 rounded-lg text-pretty text-xl text-center leading-7 
       text-onSurface bg-surfaceContainerHigh">
        Ups... no pudimos encontrar la página que buscas. Es posible que la dirección esté
        incorrecta o que la página haya sido movida.
      </p>
      
      <PrimaryButton
        text='Regresar al inicio'
        IconBtn={ChevronRight}
        href='/'
      />
    </div>
  );
}
