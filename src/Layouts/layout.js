import { Outlet } from "react-router-dom";
import { Navbar } from "../Components/navbar";
import { Box } from "@chakra-ui/react";
import { CartShopping } from "../Components/cartShopping";

export default function LayoutPage() {
  return (
    <Box>
      <Navbar />
      <Outlet />
      <CartShopping />
    </Box>
  );
}
