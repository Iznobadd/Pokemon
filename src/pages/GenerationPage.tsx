import { useParams } from "react-router-dom";
import { useFind } from "../services/pokemon/queries";
import { useCart } from "../context/useCart";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { Pokemon } from "../types/pokemon.type";
import { FaCheck } from "react-icons/fa6";

const GenerationPage = () => {
  const { generation } = useParams<{ generation: string }>();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState<string>("");
  const [page, setPage] = useState<number>(0);
  const [animationStates, setAnimationStates] = useState<
    Record<number, boolean>
  >({});
  const ITEMS_PER_PAGE = 20;

  const { addToCart } = useCart();

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  useEffect(() => {
    setPage(0);
  }, [debouncedSearchTerm, generation]);

  useEffect(() => {
    if (generation) {
      document.title = `${generation} - Pokémon`;
    }
  }, [generation]);

  const findParams = useFind({
    generation,
    name: debouncedSearchTerm || undefined,
    limit: ITEMS_PER_PAGE,
    offset: page * ITEMS_PER_PAGE,
  });

  const handleAddToCart = (pokemon: Pokemon) => {
    addToCart({
      pokemon,
      generation: generation || "",
      shiny: true,
    });

    setAnimationStates((prev) => ({
      ...prev,
      [pokemon.id]: true,
    }));

    setTimeout(() => {
      setAnimationStates((prev) => ({
        ...prev,
        [pokemon.id]: false,
      }));
    }, 2000);
  };

  return (
    <>
      <div>
        <h1 className="block text-center text-3xl text-white font-bold">
          Pokemon from {generation}
        </h1>
        <div className="text-center mt-4">
          <input
            type="text"
            placeholder="Search a Pokemon"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border rounded-md text-black w-96 placeholder:text-center p-4 text-center"
          />
        </div>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-16 mt-8 w-full">
        {findParams.isLoading && <Loading />}
        {findParams.isError && <div>Error</div>}
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
              className={`relative bg-button text-white px-6 py-3 rounded-lg shadow-md hover:bg-button/70 transition mt-6 w-full ${
                animationStates[pokemon.id]
                  ? "bg-green-500 hover:bg-green-500"
                  : ""
              }`}
              onClick={() => handleAddToCart(pokemon)}
            >
              {animationStates[pokemon.id] ? (
                <span className="flex justify-center items-center ">
                  <FaCheck size={24} />
                </span>
              ) : (
                "Add to cart"
              )}
            </button>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center mt-8">
        <button
          className="bg-button text-white px-4 py-2 rounded-md mx-2 disabled:bg-gray-500"
          onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
          disabled={page === 0 || findParams.isLoading}
        >
          Précédent
        </button>
        <span className="text-white mx-4">Page {page + 1}</span>
        <button
          className="bg-button text-white px-4 py-2 rounded-md mx-2 disabled:bg-gray-500"
          onClick={() => setPage((prev) => prev + 1)}
          disabled={!findParams.data || findParams.data.length < ITEMS_PER_PAGE}
        >
          Suivant
        </button>
      </div>
    </>
  );
};

export default GenerationPage;
