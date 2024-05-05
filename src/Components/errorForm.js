import { Flex, Text } from "@chakra-ui/react";
import { AiOutlineBug } from "react-icons/ai";

export const ErrorForm = ({ message }) => {
  const errorMessage = null;

  return (
    <Flex
      mb={6}
      bg="#fff"
      borderRadius={5}
      p={2}
      fontSize={{ base: 10, md: 12, lg: 14 }}
      w="100%"
      textTransform="capitalize"
      fontWeight={600}
      pos="relative"
      left={-10}
      alignItems="center"
      justifyContent="space-between"
    >
      <Text color="rgb(235, 69, 95)" textAlign="center" w="100%">
        {errorMessage}
      </Text>
      <AiOutlineBug strokeWidth={50} />
    </Flex>
  );
};
