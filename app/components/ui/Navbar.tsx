import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <header className="flex justify-between items-center w-full h-24  box-content bg-inverseOnSurface">

            <Image
            src="/notFound.png"
            width={100}
            height={100}
            alt="Logo" 
            className="object-center object-cover" />

            <nav>
                <ul className="flex gap-x-8 text-white">
                    <li>
                        <a href="/">Inicio</a>
                    </li>
                    <li>
                        <a href="/">Inicio</a>
                    </li>
                    <li>
                        <a href="/">Inicio</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}