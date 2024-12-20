import { FC } from "react";
import { ProductData } from "../types/products.type";
import { useCheckoutSession } from "../services/stripe/mutations";
import { stripePromise } from "../utils/stripe";

type CheckoutButtonProps = {
  products: ProductData[];
  selectedDelivery: string;
  deliveryDetails: string;
};

const CheckoutButton: FC<CheckoutButtonProps> = ({
  products,
  selectedDelivery,
  deliveryDetails,
}) => {
  const checkoutMutation = useCheckoutSession();

  const handleCheckout = async () => {
    try {
      const payload = {
        products,
        deliveryMethod: selectedDelivery,
        deliveryDetails,
      };
      checkoutMutation.mutate(payload, {
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
        className="bg-button text-white px-8 py-4 rounded w-full font-bold disabled:opacity-50"
        onClick={handleCheckout}
        disabled={checkoutMutation.isPending || deliveryDetails === ""}
      >
        {checkoutMutation.isPending ? "Loading..." : "CHECKOUT"}
      </button>
      {checkoutMutation.isError && <p>Error creating checkout session</p>}
    </div>
  );
};

export default CheckoutButton;
