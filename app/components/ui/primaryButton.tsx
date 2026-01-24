
import { ElementType, ReactNode } from "react";
import Link from 'next/link';

interface ButtonProps {
    text: string;
    IconBtn: ElementType;
    href?: string;
    onClick?: () => void;
    extraclass?: string;
}

export default function PrimaryButton({ text, href, IconBtn, onClick, extraclass }: ButtonProps) {

    const baseStyles = `flex items-center justify-center gap-2 px-5 py-2.5 rounded-full
                text-lg tracking-normal bg-primaryContainer text-onPrimaryContainer font-semibold
                transition ease-out duration-300 hover:scale-105 cursor-pointer ${extraclass}`;

    return (
        <>
            {href ?
                (
                    <Link href={href} className={`${baseStyles}`}>
                        {text}
                        <IconBtn className="size-5 text-onPrimaryContainer" strokeWidth={3} />
                    </Link>
                ) : (
                    <button className={`${baseStyles}`}
                        onClick={onClick}>

                        <IconBtn className="size-5 text-onPrimaryContainer" strokeWidth={3} />
                        {text}

                    </button>)}

        </>
    );
}