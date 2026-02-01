import { products } from "@/lib/data/products";
import FilterButton from "./components/ui/FilterButton";
import PrimaryCard from "./components/ui/PrimaryCard";
import SearchBar from "./components/ui/SearchBar";

// En Next.js 15 searchParams es una promesa
interface HomeProps {
  searchParams: Promise<{
    query?: string;
    category?: string; // Agregamos la categoría para el filtro
  }>;
}

export default async function Home(props: HomeProps) {
  // 1. Esperamos a obtener los parámetros (Importante para Next.js 15)
  const searchParams = await props.searchParams;
  const query = searchParams.query || '';
  const categoryFilter = searchParams.category || '';

  // 2. Filtramos los productos
  const filteredProducts = products.filter((product) => {
    // A. Filtro de Búsqueda (Texto)
    const matchesSearch = 
      product.title.toLowerCase().includes(query.toLowerCase()) ||
      product.description.toLowerCase().includes(query.toLowerCase());

    // B. Filtro de Categoría (Select del botón)
    // Si no hay categoría seleccionada, pasa siempre (true)
    const matchesCategory = categoryFilter 
      ? product.category?.toLowerCase() === categoryFilter.toLowerCase() 
      : true;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="flex flex-col gap-8 px-20 py-12 w-full min-h-screen h-full text-3xl text-onPrimaryContainer">
      <div className="flex h-14 gap-2">
        <SearchBar />
        <FilterButton />
      </div>

      <div className="flex flex-wrap gap-6 w-full">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <PrimaryCard
              key={product.id || index}
              title={product.title}
              description={product.description}
              price={product.price}
            />
          ))
        ) : (
          <div className="w-full flex flex-col items-center justify-center pt-20 text-center opacity-60">
            <p className="text-2xl font-medium">No se encontraron resultados.</p>
            <p className="text-lg">Intenta limpiar los filtros.</p>
          </div>
        )}
      </div>
    </div>
  );
}