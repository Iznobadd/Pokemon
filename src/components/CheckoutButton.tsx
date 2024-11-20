import { FC } from "react";
import { ProductData } from "../types/products.type";
import { useCheckoutSession } from "../services/stripe/mutations";
import { stripePromise } from "../utils/stripe";

type CheckoutButtonProps = {
  products: ProductData[];
};

const CheckoutButton: FC<CheckoutButtonProps> = ({ products }) => {
  const checkoutMutation = useCheckoutSession();

  const handleCheckout = async () => {
    try {
      checkoutMutation.mutate(products, {
        onSuccess: async (session) => {
          console.log(session);
          const stripe = await stripePromise;
          if (stripe && session.id) {
            const { error } = await stripe.redirectToCheckout({
              sessionId: session.id,
            });

            if (error) {
              console.error(error);
            }
          }
        },
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <button
        className="bg-orange-500 text-white px-8 py-4 rounded w-full font-bold"
        onClick={handleCheckout}
        disabled={checkoutMutation.isPending}
      >
        {checkoutMutation.isPending ? "Loading..." : "CHECKOUT"}
      </button>
      {checkoutMutation.isError && <p>Error creating checkout session</p>}
    </div>
  );
};

export default CheckoutButton;
