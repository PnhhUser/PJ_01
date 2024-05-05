import { Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export const Logo = ({ styleProps }) => {
  const [strokeWidth, setStrokeWitdth] = useState(3);

  useEffect(() => {
    window.addEventListener("resize", (e) => {
      if (e.target.innerWidth <= 768) {
        setStrokeWitdth(2);
      }
    });

    return () => {
      window.addEventListener("resize", () => {
        setStrokeWitdth(3);
      });
    };
  }, []);

  return (
    <Flex>
      <Text
        color="#fff"
        fontSize={{ base: 40, md: 65 }}
        textTransform="capitalize"
        style={{
          ...styleProps,
          WebkitTextStrokeWidth: strokeWidth,
          WebkitTextStrokeColor: "#273036",
          fontFamily: "var(--font-poetsen)",
        }}
        zIndex={999}
      >
        craft shop
      </Text>
    </Flex>
  );
};
