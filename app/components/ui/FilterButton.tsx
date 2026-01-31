import { Filter } from 'lucide-react'
export default function FilterButton() {
    return (
        <button 
        className="flex justify-center items-center h-full aspect-square rounded-full bg-primaryContainer
        cursor-pointer transition-transform duration-300 ease-out hover:scale-110">
            <Filter />
        </button>
    );
}