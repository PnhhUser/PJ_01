import { Flex, Text } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";

const ButtonLink = ({ name, linkName }) => {
  const location = useLocation();

  return (
    <Link to={linkName} state={{ search: location.pathname }}>
      <Text
        borderWidth={1}
        borderRadius={50}
        p={2}
        borderColor="#273036"
        textAlign="center"
        textTransform="capitalize"
      >
        {name}
      </Text>
    </Link>
  );
};

const ColumnComponent = ({ children, width }) => {
  return (
    <Flex
      w={width}
      flexDirection="column"
      p={2}
      pt={{ base: 0, md: 2 }}
      gap={2}
    >
      {children}
    </Flex>
  );
};

export default function DashboardPage() {
  return (
    <Flex w="100%" justifyContent="center" alignItems="center">
      <Flex
        borderWidth={1}
        borderRadius={10}
        w={800}
        p={2}
        gap={2}
        wrap={{ base: "wrap", md: "nowrap" }}
      >
        <Flex
          w={{ base: "100%", md: "30%" }}
          borderWidth={1}
          borderRadius={10}
          p={4}
          gap={2}
          flexDirection="column"
          borderColor="#273036"
        >
          <ButtonLink name={"profile"} linkName={"/personal"} />
        </Flex>
        <Flex
          w={{ base: "100%", md: "70%" }}
          borderWidth={1}
          borderRadius={10}
          borderColor="#273036"
          gap={2}
          p={2}
          wrap={{ base: "wrap", md: "nowrap" }}
        >
          <ColumnComponent width={{ base: "100%", md: "50%" }}>
            <ButtonLink name={"user"} linkName={"user"} />
            <ButtonLink name={"catalog"} linkName={"catalog"} />
            <ButtonLink name={"product"} linkName={"product"} />
          </ColumnComponent>
          <ColumnComponent width={{ base: "100%", md: "50%" }}>
            <ButtonLink name={"statistical"} linkName={"statistical"} />
          </ColumnComponent>
        </Flex>
      </Flex>
    </Flex>
  );
}
