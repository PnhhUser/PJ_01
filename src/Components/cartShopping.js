import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Text,
} from "@chakra-ui/react";
import { useCart } from "../contexts/cartContext";

export const CartShopping = () => {
  const { isOpen, onClose } = useCart();

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader borderBottomWidth={1}>
          <DrawerCloseButton />
          <Text
            textTransform="capitalize"
            style={{ fontFamily: "var(--font-jaco)" }}
          >
            shopping cart
          </Text>
        </DrawerHeader>
        <DrawerBody>
          <Flex alignItems="center" justifyContent="center" h="100%">
            <Text color="GrayText">There are no products in the cart yet</Text>
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
