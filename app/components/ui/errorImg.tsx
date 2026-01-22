import { StaticImageData } from "next/image";

interface ErrorImgProps {
  // StaticImageData para imports locales o string para urls de internet
  imagesrc: StaticImageData | string; 
}

export default function ErrorImg({ imagesrc }: ErrorImgProps) {
  
  const imagePath = (typeof imagesrc === 'string') ? imagesrc : imagesrc.src;

  return (
    <div className='flex items-center justify-center p-6 size-64 rounded-full bg-surfaceContainerHigh'>
      <img 
        src={imagePath} 
        className='w-full h-full object-center object-contain'
        alt="Error illustration" 
      />
    </div>
  );
}