'use client'
import { codes } from '@/lib/data/errorCodes';
import { Info, CircleQuestionMark, RotateCcw } from 'lucide-react';
import PrimaryButton from './components/ui/PrimaryButton';
import ErrorImg from './components/ui/ErrorImg';

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

            <ErrorImg imagesrc={info.image.src} />
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

            <PrimaryButton
             text='Intentar de nuevo'
             IconBtn={RotateCcw}
             onClick={reset}
             />
        </div>
    )
}