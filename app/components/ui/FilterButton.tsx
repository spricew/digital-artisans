'use client'

import { useState } from 'react'
import { Filter, X } from 'lucide-react'
import { useRouter, useSearchParams, usePathname } from 'next/navigation'

export default function FilterButton() {
    const [isOpen, setIsOpen] = useState(false)
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    // Estado local inicializado con lo que hay en la URL
    const [category, setCategory] = useState(searchParams.get('category') || '');

    const handleApply = () => {
        const params = new URLSearchParams(searchParams);
        
        // Actualizamos el parámetro 'category'
        if (category) {
            params.set('category', category);
        } else {
            params.delete('category');
        }

        // Empujamos a la URL
        replace(`${pathname}?${params.toString()}`);
        setIsOpen(false);
    }

    return (
        <div className="relative inline-block h-full">
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className={`flex justify-center items-center h-full aspect-square rounded-full
                bg-primaryContainer text-onPrimaryContainer
                cursor-pointer transition-all duration-300 ease-out hover:scale-110 focus:outline-0
                ${isOpen ? 'rotate-180' : 'rotate-0'}`}
            >
                {isOpen ? <X size={20} /> : <Filter size={20} />}
            </button>

            {isOpen && (
                <div className="absolute right-0 top-full mt-3 w-64 bg-surfaceContainer rounded-2xl p-5 z-50">   
                    <div className="flex flex-col gap-4">
                        <h3 className="font-semibold text-onSurfaceVariant text-lg">Categoría</h3>

                        <select 
                            className="w-full p-2 rounded-lg bg-surfaceContainerHighest text-base"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            <option value="">Todas</option>
                            <option value="textil">Textil</option>
                            <option value="barro">Barro / Cerámica</option>
                            <option value="madera">Madera</option>
                            <option value="joyeria">Joyería</option>
                            <option value="artesania">Artesanía Varia</option>
                        </select>

                        <button 
                            onClick={handleApply}
                            className="w-full mt-2 py-2 bg-black text-white rounded-xl text-base font-medium hover:bg-gray-800"
                        >
                            Aplicar
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}