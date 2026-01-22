'use client'
import { codes } from '@/lib/data/errorCodes';
import { Info, CircleQuestionMark, RotateCcw } from 'lucide-react';

export default function GlobalError({
    error,
    reset,
}: {
    error: Error
    reset: () => void
}) {

    const errorCode = Object.keys(codes).find(code => error.message.includes(code)) || 500;

    // @ts-ignore - se ignora el typescript por el indexado de string
    const info = codes[errorCode];

    return (
        <div className="flex flex-col items-center justify-center gap-4 h-screen">

            <div className='flex items-center justify-center p-6 size-64 rounded-full bg-surfaceContainerHigh'>
                <img src={info.image.src} className='w-full h-full object-center object-cover'/>
            </div>

            <h2 className='text-6xl font-medium text-onPrimaryContainer'>{errorCode} - {info.title}</h2>

            <div className="flex items-center justify-center gap-4 w-full">

                <div className="squircle flex justify-start items-center gap-3 p-6 min-w-fit w-64 h-24 rounded-xl bg-surfaceContainerHigh">
                    <CircleQuestionMark className="size-10 text-onPrimaryContainer" strokeWidth={2.2} />
                    <div className="flex flex-col">
                        <span className="text-2xl font-semibold text-onPrimaryContainer">Significado:</span>
                        <p className="">{info.reason}</p>
                    </div>
                </div>

                <div className="squircle flex justify-start items-center gap-3 p-6 min-w-fit w-64 h-24 rounded-xl bg-surfaceContainerHigh">
                    <Info className="size-10 text-onPrimaryContainer" strokeWidth={2.2} />
                    <div className="flex flex-col">
                        <span className="text-2xl font-semibold text-onPrimaryContainer">La culpa es de:</span>
                        <p className="">{info.blame}</p>
                    </div>
                </div>

            </div>


            <button
                onClick={reset}
                className="flex items-center justify-center gap-3 px-5 py-2.5 mt-2 rounded-full
                 bg-primaryContainer text-onPrimaryContainer font-semibold
                transition ease-out duration-300 hover:scale-105 cursor-pointer"
            >
                <RotateCcw className="size-5 text-onPrimaryContainer" strokeWidth={2.8} />
                Intentar de nuevo
            </button>
        </div>
    )
}