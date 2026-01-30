import SearchBar from "./components/ui/SearchBar";

export default async function Home() {

  // throw new Error('500');

  return (
    <div className="flex px-20 py-12 w-full min-h-screen h-full text-3xl text-onPrimaryContainer">
      {/* <SearchBar /> */}
      <div className="flex flex-col gap-3">
        <div className="size-56 rounded-2xl bg-primaryContainer">

        </div>
        
        <div className="flex flex-col gap-2">
          <span className="text-2xl font-semibold">Ola</span>
          <p className="text-base font-light">Ola</p>
          <span className="text-xl font-medium">$444</span>
        </div>
      </div>
    </div>
  );
}