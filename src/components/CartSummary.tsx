import React, { useState } from "react";
import { useAuth } from "../context/useAuth";
import { CartItem } from "../types/cart.type";
import { ProductData } from "../types/products.type";
import CheckoutButton from "./CheckoutButton";

type CartSummaryProps = {
  cart: CartItem[];
};

const CartSummary = ({ cart }: CartSummaryProps) => {
  const [selectedDelivery, setSelectedDelivery] = useState<string>("WHATSAPP");
  const [deliveryDetails, setDeliveryDetails] = useState<string>("");

  const handleDeliverySelect = (method: string) => {
    setSelectedDelivery(method);
    setDeliveryDetails("");
  };

  const handleDeliveryDetailsChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDeliveryDetails(e.target.value);
  };

  const { token, user } = useAuth();
  const products: ProductData[] = cart.map((item) => ({
    name: item.pokemon.name,
    generation: item.generation,
    image: item.pokemon.sprites.front || "",
    price: 4.99,
    quantity: 1,
    shiny: item.shiny,
  }));

  let total = cart.length * 4.99;

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
          $ {total.toFixed(2)}
        </p>
      </div>
      <div className="py-8 mx-8 border-b border-primary">
        <h3 className="font-bold text-xl text-white">DELIVERY</h3>
        <div className="flex justify-around">
          {["WHATSAPP", "DISCORD", "EMAIL"].map((method) => (
            <div
              key={method}
              className={`flex justify-between py-4 items-center w-full text-center cursor-pointer ${
                selectedDelivery === method
                  ? "border-b-2 border-b-gray-400"
                  : ""
              }`}
              onClick={() => handleDeliverySelect(method)}
            >
              <h3
                className={`font-bold ${
                  selectedDelivery === method ? "text-white" : "text-gray-400"
                } w-full`}
              >
                {method}
              </h3>
            </div>
          ))}
        </div>
        {selectedDelivery && (
          <div className="mt-4">
            {selectedDelivery === "DISCORD" && (
              <>
                <label
                  htmlFor="deliveryDetails"
                  className="text-gray-400 text-sm block mb-2"
                >
                  Enter your discord name :
                </label>
                <input
                  type="text"
                  id="deliveryDetails"
                  className="w-full bg-primary px-4 py-2 rounded text-white border border-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  value={deliveryDetails}
                  onChange={handleDeliveryDetailsChange}
                />
              </>
            )}
            {selectedDelivery === "WHATSAPP" && (
              <>
                <label
                  htmlFor="deliveryDetails"
                  className="text-gray-400 text-sm block mb-2"
                >
                  Enter your phone number :
                </label>
                <input
                  type="text"
                  id="deliveryDetails"
                  className="w-full bg-primary px-4 py-2 rounded text-white border border-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  value={deliveryDetails}
                  onChange={handleDeliveryDetailsChange}
                />
              </>
            )}
            {selectedDelivery === "EMAIL" && (
              <>
                <label
                  htmlFor="deliveryDetails"
                  className="text-gray-400 text-sm block mb-2"
                >
                  Enter your email :
                </label>
                <input
                  type="text"
                  id="deliveryDetails"
                  className="w-full bg-primary px-4 py-2 rounded text-white border border-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  value={user?.email}
                  onChange={handleDeliveryDetailsChange}
                />
              </>
            )}
          </div>
        )}
      </div>

      {token ? (
        <div className="pt-8 mx-8">
          <CheckoutButton
            products={products}
            selectedDelivery={selectedDelivery}
            deliveryDetails={deliveryDetails}
          />
        </div>
      ) : (
        <div className="pt-8 mx-8">
          <button className="bg-button text-white px-8 py-4 rounded w-full font-bold">
            Login
          </button>
          <button className="mt-8 bg-gray-400 text-white px-8 py-4 rounded w-full font-bold">
            Register
          </button>
        </div>
      )}
    </>
  );
};

export default CartSummary;
