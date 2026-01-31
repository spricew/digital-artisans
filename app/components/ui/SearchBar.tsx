import { Search } from "lucide-react";


export default function SearchBar() {
    return (

        <div className="relative flex items-center w-full max-w-3xl rounded-full ring ring-outlineVariant
        bg-surfaceContainerLow text-onSurface text-xl">
            <span className="flex justify-center items-center h-14 pl-5">
                <Search className="size-[1em] text-inherit z-10 opacity-50" />
            </span>

            <input
                type="text"
                placeholder="Buscar artículos"
                className="w-full h-14 rounded-full pl-3.5 z-0 focus:outline-0"
            />
        </div>
    );
}