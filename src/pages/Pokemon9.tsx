import { useFindAllScarletViolet } from "../services/pokemon/queries";

const Pokemon9 = () => {
  const allScarletViolet = useFindAllScarletViolet();

  allScarletViolet.isLoading && <div>Loading...</div>;
  allScarletViolet.isError && <div>Error</div>;
  return (
    <div className="grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-16 m-16 mt-8 w-full">
      {allScarletViolet.data?.map((pokemon) => (
        <div
          key={pokemon.id}
          className="flex justify-center items-center flex-col rounded-2xl p-4 w-full bg-[rgba(255,255,255,0.125)]"
        >
          <img src={pokemon.sprites.front} className="h-30" />
          <h3 className="text-center capitalize text-white font-bold text-xl mt-4">
            {pokemon.name.replace("-", " ")}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default Pokemon9;
