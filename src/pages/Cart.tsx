import CartSummary from "../components/CartSummary";
import { useCart } from "../context/useCart";
import { Helmet } from "react-helmet";

const Cart = () => {
  const { cart, removeFromCart, updateGeneration, updateShinyStatus } =
    useCart();

  return (
    <>
      <Helmet>
        <title>Cart - Pokemon</title>
      </Helmet>
      <div className="flex gap-16">
        <div className="text-white w-2/3">
          {cart.map((item) => (
            <div
              key={item.pokemon.id}
              className="flex gap-16 py-16 border-b border-white relative"
            >
              <img
                src={item.pokemon.sprites.front}
                alt=""
                className="p-12 bg-primary rounded border border-primary"
              />
              <div>
                <h1 className="text-2xl font-bold">
                  {item.pokemon.name.toUpperCase().replace("-", " ")}
                </h1>
                <h2 className="text-xl text-gray-400 mt-4">$ 4.99</h2>
                <select
                  name="gen"
                  id="gen"
                  className="bg-primary px-6 py-4 text-lg min-w-[400px] rounded mt-4"
                  defaultValue={item.generation}
                  onChange={(e) =>
                    updateGeneration(item.pokemon.id, e.target.value)
                  }
                >
                  {item.pokemon.generation.map((gen) => (
                    <option key={gen} value={gen}>
                      {gen}
                    </option>
                  ))}
                </select>
                <div className="mt-4">
                  <span className="font-bold text-lg">SHINY :</span>
                  <span
                    className={`px-4 py-2 m-2 border border-white rounded cursor-pointer ${
                      item.shiny ? "bg-orange-500 border-0" : ""
                    }`}
                    onClick={() => updateShinyStatus(item.pokemon.id, true)}
                  >
                    YES
                  </span>
                  <span
                    className={`px-4 py-2 m-2 border border-white rounded cursor-pointer ${
                      item.shiny ? "" : "bg-orange-500 border-0"
                    }`}
                    onClick={() => updateShinyStatus(item.pokemon.id, false)}
                  >
                    NO
                  </span>
                </div>
              </div>
              <div className="absolute bottom-8 right-8">
                <button
                  className="text-white px-4 py-2 bg-red-600 rounded"
                  onClick={() => removeFromCart(item.pokemon.id)}
                >
                  Remove pokemon
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="w-1/3 border bg-primary border-primary rounded py-8">
          <CartSummary cart={cart} />
        </div>
      </div>
    </>
  );
};

export default Cart;
