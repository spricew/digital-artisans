import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import PrimaryButton from "../ui/PrimaryButton";

export default function Navbar() {
    return (
        <header className="flex justify-between items-center px-20 py-6 w-full h-24 box-content bg-surfaceContainer">

            <Image
                src="/notFound.png"
                width={1200}
                height={1200}
                alt="Logo"
                className="size-14 object-center object-cover" />

            <nav>
                <ul className="flex gap-x-8 items-center text-xl font-semibold text-onSurface">
                    <li>
                        <Link href="/">Inicio</Link>
                    </li>
                    <li>
                        <Link href="/">Contacto</Link>
                    </li>
                    <li>
                        {/* <button className="flex items-center gap-1">
                            Recursos
                            <ChevronDown size={25} strokeWidth={3}/>
                        </button> */}

                        <PrimaryButton
                        text="Recursos"
                        textSize="text-lg"
                        IconBtn={ChevronDown} />
                    </li>
                </ul>
            </nav>
        </header>
    );
}