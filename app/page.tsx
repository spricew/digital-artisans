import FilterButton from "./components/ui/FilterButton";
import PrimaryCard from "./components/ui/PrimaryCard";
import SearchBar from "./components/ui/SearchBar";

export default async function Home() {

  // throw new Error('500');

  return (
    <div className="flex flex-col gap-8 px-20 py-12 w-full min-h-screen h-full text-3xl text-onPrimaryContainer">
      <div className="flex gap-2">
        <SearchBar />
        <FilterButton />
      </div>

      <PrimaryCard
        title="Plato nuevo"
        description="hola este es un nuevo producto que deberias probar"
        price={300}
      />

    </div>
  );
}