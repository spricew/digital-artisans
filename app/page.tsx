// const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/ditto';
const BASE_URL = 'https://pokeapi.co/api/v2/pokemonasd/ditto';

// app/dashboard/page.tsx
export default async function Dashboard() {
  const res = await fetch(`${BASE_URL}`);

  // if (!res.ok) {
  //   throw new Error(`${res.status}`);
  // }

  throw new Error('400');

  return (
    <div className="flex items-center justify-center w-full h-screen text-3xl text-onPrimaryContainer">
      Bienvenido
    </div>
  );
}