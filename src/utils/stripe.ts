import { loadStripe, Stripe } from "@stripe/stripe-js";

export const stripePromise: Promise<Stripe | null> = loadStripe(
  "pk_test_51QN8iSCATk4gQ6pJM85BAgIWUdSHLW5HgazgCGjgGbrNpVkVkQ14f1jWlo8KkI1Zm3KDLyUlu0zvoAB31iujsCqv0066Sfrtq3"
);
