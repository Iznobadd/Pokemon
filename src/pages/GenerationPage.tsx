import { useParams } from "react-router-dom";
import { useFind } from "../services/pokemon/queries";
import { useCart } from "../context/useCart";
import { useEffect, useState } from "react";

const GenerationPage = () => {
  const { generation } = useParams<{ generation: string }>();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState<string>("");

  const { addToCart } = useCart();

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  const findParams = useFind({
    generation,
    name: debouncedSearchTerm || undefined,
    limit: 20,
  });

  findParams.isLoading && <div>Loading...</div>;
  findParams.isError && <div>Error</div>;
  return (
    <>
      <div>
        <h1 className="block text-center text-3xl text-white font-bold">
          Pokemon from {generation}
        </h1>
        <div className="text-center mt-4">
          <input
            type="text"
            placeholder="Rechercher un Pokémon"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border p-2 rounded-md text-black"
          />
        </div>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-16 mt-8 w-full">
        {findParams.data?.map((pokemon) => (
          <div
            key={pokemon.id}
            className="flex justify-center items-center flex-col rounded-2xl p-4 w-full bg-[rgba(255,255,255,0.125)]"
          >
            <h3 className="text-center uppercase text-white font-bold text-xl my-4">
              {pokemon.name.replace("-", " ")}
            </h3>
            <img src={pokemon.sprites.front} className="h-30" />
            <button
              className="bg-orange-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-orange-600 transition mt-6"
              onClick={() =>
                addToCart({
                  pokemon,
                  generation: generation || "",
                  shiny: true,
                })
              }
            >
              Ajouter au panier
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default GenerationPage;
