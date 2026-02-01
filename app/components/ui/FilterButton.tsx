'use client'

import { useState } from 'react'
import { useRouter, useSearchParams, usePathname } from 'next/navigation'
import { Filter, X } from 'lucide-react'

export default function FilterButton() {
    const [isOpen, setIsOpen] = useState(false)
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    // Estados locales inicializados con la URL
    const [category, setCategory] = useState(searchParams.get('category') || '');
    const [date, setDate] = useState(searchParams.get('date') || '');
    const [operator, setOperator] = useState(searchParams.get('operator') || 'AND');

    const handleApply = () => {
        const params = new URLSearchParams(searchParams);

        // 1. Manejo de Categoría
        if (category) params.set('category', category);
        else params.delete('category');

        // 2. Manejo de Fecha
        if (date) params.set('date', date);
        else params.delete('date');

        // 3. Manejo de Operador (siempre lo enviamos si no es default, o default AND)
        if (operator && operator !== 'AND') params.set('operator', operator);
        else params.delete('operator'); // Si es AND, lo quitamos para limpiar URL

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
                <div className="absolute right-0 top-full mt-3 w-72 bg-surfaceContainer rounded-2xl p-5 z-50 animate-in fade-in zoom-in-95 duration-200">
                    <div className="flex flex-col gap-4">
                        <h3 className="font-semibold text-onSurfaceVariant text-lg">Configurar Filtros</h3>

                        {/* Operador Lógico */}
                        <div className="flex flex-col gap-1">
                            <span className="text-sm text-onSurfaceVariant font-medium">Lógica</span>
                            <div className="flex bg-surfaceContainerHigh p-1 rounded-lg">
                                {['AND', 'OR', 'NOT'].map((op) => (
                                    <button
                                        key={op}
                                        onClick={() => setOperator(op)}
                                        className={`flex-1 py-1 text-xs font-bold rounded-md transition-colors ${operator === op
                                            ? 'bg-surfaceBright text-onSurfaceVariant shadow-sm'
                                            : 'text-onSurfaceVariant/80 hover:text-onSurface'
                                            }`}
                                    >
                                        {op}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Selección de Categoría */}
                        <div className="flex flex-col gap-1">
                            <span className="text-sm text-onSurfaceVariant font-medium">Categoría</span>
                            <select
                                className="w-full p-2 rounded-lg bg-surfaceContainerHigh text-sm"
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
                        </div>

                        {/* Selección de Fecha */}
                        <div className="flex flex-col gap-1">
                            <span className="text-sm text-onSurfaceVariant font-medium">Publicado desde</span>
                            <input
                                type="date"
                                className="w-full p-2 rounded-lg bg-surfaceContainerHigh text-sm"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                            />
                        </div>

                        <button
                            onClick={handleApply}
                            className="w-full mt-2 py-2 bg-surfaceBright text-onSurfaceVariant rounded-full text-sm font-medium cursor-pointer"
                        >
                            Aplicar Filtros
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}