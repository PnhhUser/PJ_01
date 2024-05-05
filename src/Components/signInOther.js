import { Box, Flex } from "@chakra-ui/react";

export const SignInOther = () => {
  return (
    <Flex mt={4} flexDirection="column" gap={4} pos="absolute" left={0}>
      <Box
        bg="#fff"
        w={200}
        h={10}
        fontSize={14}
        textAlign="center"
        lineHeight={10}
        fontWeight={600}
        borderEndRadius={50}
        style={{
          fontFamily: "var(--font-poetsen)",
        }}
      >
        Sign in by Google
      </Box>
      <Box
        bg="#fff"
        w={180}
        h={10}
        fontSize={14}
        textAlign="center"
        lineHeight={10}
        fontWeight={600}
        borderEndRadius={50}
        style={{
          fontFamily: "var(--font-poetsen)",
        }}
      >
        Sign in by FaceBook
      </Box>
    </Flex>
  );
};
