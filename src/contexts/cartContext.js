import { useDisclosure } from "@chakra-ui/react";
import { createContext, useContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <CartContext.Provider value={{ isOpen, onOpen, onClose }}>
      {children}
    </CartContext.Provider>
  );
};

export function useCart() {
  return useContext(CartContext);
}
