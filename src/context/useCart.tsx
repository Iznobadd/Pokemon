import { createContext, FC, ReactNode, useContext, useState } from "react";
import { Pokemon } from "../types/pokemon.type";

type CartItem = {
  pokemon: Pokemon;
  generation: string;
  shiny: boolean;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (pokemonId: number) => void;
  updateShinyStatus: (pokemonId: number, shiny: boolean) => void;
  updateGeneration: (id: number, newGeneration: string) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const addToCart = (item: CartItem) => {
    const updatedCart = [...cart, item];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeFromCart = (pokemonId: number) => {
    const updatedCart = cart.filter((item) => item.pokemon.id !== pokemonId);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const updateShinyStatus = (pokemonId: number, shiny: boolean) => {
    const updatedCart = cart.map((item) => {
      if (item.pokemon.id === pokemonId) {
        return {
          ...item,
          shiny,
        };
      }
      return item;
    });
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const updateGeneration = (id: number, newGeneration: string) => {
    const updatedCart = cart.map((item) =>
      item.pokemon.id === id ? { ...item, generation: newGeneration } : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateShinyStatus,
        updateGeneration,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
