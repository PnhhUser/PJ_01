import { Flex, Text } from "@chakra-ui/react";

export const ErrorForm = ({ message }) => {
  return (
    <Flex>
      <Text
        color="rgb(235, 69, 95)"
        w="100%"
        fontSize={12}
        mb={4}
        fontWeight="bold"
      >
        {message}
      </Text>
    </Flex>
  );
};
