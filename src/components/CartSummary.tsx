import { CartItem } from "../types/cart.type";
import { ProductData } from "../types/products.type";
import CheckoutButton from "./CheckoutButton";

type CartSummaryProps = {
  cart: CartItem[];
};

const CartSummary = ({ cart }: CartSummaryProps) => {
  const products: ProductData[] = cart.map((item) => ({
    name: item.pokemon.name,
    generation: item.generation,
    image: item.pokemon.sprites.front || "",
    price: 4.99,
    quantity: 1,
  }));

  return (
    <>
      <h2 className="font-bold text-white text-center pb-8 mx-8 text-2xl border-b border-b-primary">
        ORDER SUMMARY
      </h2>
      <div className="mx-8 py-8 border-b border-primary">
        <h3 className="font-bold text-xl text-white">CART ITEMS</h3>
        {cart.map((item) => (
          <div key={item.pokemon.id} className="flex justify-between my-4">
            <p className="text-gray-400">
              {item.pokemon.name.toUpperCase().replace("-", " ")}
            </p>
            <p className="text-gray-400">$ 4.99</p>
          </div>
        ))}
        <p className="text-gray-400 text-right">Total items: {cart.length}</p>
      </div>
      <div className="mx-8 py-8 border-b border-primary flex justify-between">
        <h3 className="font-bold text-xl text-white">TOTAL</h3>
        <p className="text-gray-400 text-right text-xl font-bold">
          $ {cart.length * 4.99}
        </p>
      </div>
      <div className="py-8 mx-8 border-b border-primary">
        <h3 className="font-bold text-xl text-white">DELIVERY</h3>
        <div className="flex justify-between py-4 items-center">
          <h3 className="font-bold text-gray-400">WHATSAPP</h3>
          <input type="text" className="bg-gray-400 rounded p-2" />
        </div>
        <div className="flex justify-between py-4 items-center">
          <h3 className="font-bold text-gray-400">DISCORD</h3>
          <input type="text" className="bg-gray-400 rounded p-2" />
        </div>
        <div className="flex justify-between py-4 items-center">
          <h3 className="font-bold text-gray-400">EMAIL</h3>
          <input type="text" className="bg-gray-400 rounded p-2" />
        </div>
      </div>
      <div className="pt-8 mx-8">
        <CheckoutButton products={products} />
      </div>
    </>
  );
};

export default CartSummary;