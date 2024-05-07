import { Flex, Spinner } from "@chakra-ui/react";

export const LoadingComponent = () => {
  return (
    <Flex justifyContent="center" alignItems="center" w="100%" h="100vh">
      <Spinner />
    </Flex>
  );
};
