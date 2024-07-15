import { usePaystackPayment } from "react-paystack";

export const usePaystack = ({
  email,
  amount,
  name,
  phone,
  address,
  city,
  publicKey,
}) => {
  const config = {
    reference: new Date().getTime().toString(),
    email,
    amount,
    publicKey,
    metadata: {
      name,
      phone,
      address,
      city,
    },
  };

  const initializePayment = usePaystackPayment(config);

  return { initializePayment };
};
