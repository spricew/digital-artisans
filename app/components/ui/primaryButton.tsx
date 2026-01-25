
import { ElementType, ReactNode } from "react";
import Link from 'next/link';

interface ButtonProps {
    text: string;
    IconBtn: ElementType;
    href?: string;
    onClick?: () => void;
    textSize?: string;
    extraclass?: string;
}

export default function PrimaryButton({ text, href, IconBtn, onClick, textSize="text-xl", extraclass }: ButtonProps) {

    const baseStyles = `flex items-center justify-center gap-2 px-5 py-2.5 rounded-full
                ${textSize} tracking-tighter bg-primaryContainer text-onPrimaryContainer font-medium
                transition ease-out duration-300 hover:scale-105 cursor-pointer ${extraclass}`;

    return (
        <>
            {href ?
                (
                    <Link href={href} className={`${baseStyles}`}>
                        {text}
                        <IconBtn className="size-5 text-inherit" strokeWidth={2.5} />
                    </Link>
                ) : (
                    <button className={`${baseStyles}`}
                        onClick={onClick}>

                        <IconBtn className="size-5 text-inherit" strokeWidth={2.5} />
                        {text}

                    </button>)}

        </>
    );
}