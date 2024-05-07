import { Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

export default function LayoutAdmin() {
  return (
    <Flex p={2} w="100%" h="100vh" alignItems="center">
      <Outlet />
    </Flex>
  );
}
