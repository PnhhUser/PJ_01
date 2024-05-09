import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

export default function LayoutAdmin() {
  return (
    <Box>
      <Outlet />
    </Box>
  );
}
