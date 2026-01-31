'use client';

import { Search } from "lucide-react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function SearchBar() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  // Función estándar sin debounce
  const handleSearch = (term: string) => {
    const params = new URLSearchParams(searchParams);
    
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    
    // Actualiza la URL inmediatamente
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="relative flex items-center py-3 w-full max-w-3xl rounded-full ring ring-outlineVariant bg-surfaceContainerLow text-onSurface text-xl">
      <span className="flex justify-center items-center pl-5 pr-2">
        <Search className="size-[1em] text-inherit z-10 opacity-50" />
      </span>

      <input
        type="text"
        placeholder="Buscar artículos..."
        className="w-full bg-transparent pl-2 pr-5 z-0 focus:outline-0"
        // Sincronizamos el input con la URL para que no se pierda el valor al recargar
        defaultValue={searchParams.get('query')?.toString()}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
}