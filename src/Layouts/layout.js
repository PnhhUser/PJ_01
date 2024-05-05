import { Outlet } from "react-router-dom";
import { Navbar } from "../Components/navbar";
import { Box } from "@chakra-ui/react";

export default function LayoutPage() {
  return (
    <Box>
      <Navbar />
      <Outlet />
    </Box>
  );
}
