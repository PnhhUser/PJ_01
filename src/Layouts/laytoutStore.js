import { Box, Flex, Text } from "@chakra-ui/react";
import { Logo } from "../Components/logo";
import { CrossbarComponent } from "../Components/corssbar";
import { useNavigate, Outlet, useParams } from "react-router-dom";
import dataJson from "../data.json";
import { useState } from "react";

const MenuLevel = () => {
  const navigate = useNavigate();
  const param = useParams();
  const category = dataJson.find((item) => item.type === param.category);
  const index = category ? category.id : null;
  const [activeParents, setActiveParents] = useState([index]);

  const toggleParent = (id) => {
    if (activeParents.includes(id)) {
      setActiveParents(activeParents.filter((i) => i !== id));
    } else {
      setActiveParents([...activeParents, id]);
    }
  };

  return (
    <Box w="100%">
      <Box
        onClick={() => navigate("/store")}
        borderWidth={1}
        borderColor="#273036"
        cursor="pointer"
        borderRadius={10}
        textAlign="center"
        textTransform="capitalize"
        h={8}
        lineHeight={8}
        fontSize={{ md: 14, lg: 16 }}
        color={!param.category ? "rgb(235, 69, 95)" : null}
        fontWeight={!param.category ? 700 : null}
      >
        All
      </Box>
      {dataJson.map((data) => {
        return (
          <Box key={data.id}>
            <Box onClick={() => navigate(data.type)}>
              <Box
                borderWidth={1}
                borderColor="#273036"
                cursor="pointer"
                borderRadius={10}
                textAlign="center"
                textTransform="capitalize"
                onClick={() => toggleParent(data.id)}
                mt={4}
                h={8}
                lineHeight={8}
                fontSize={{ md: 14, lg: 16 }}
              >
                <Text
                  color={
                    param.category === data.type ? "rgb(235, 69, 95)" : null
                  }
                  fontWeight={param.category === data.type ? 700 : null}
                >
                  {data.type}
                </Text>
              </Box>
            </Box>
            <Flex
              flexDirection="column"
              my={activeParents.includes(data.id) && 4}
              ps={activeParents.includes(data.id) && "20px"}
            >
              {activeParents.includes(data.id) &&
                data.data.map((child) => (
                  <Box
                    key={child.id}
                    onClick={() => navigate(`${data.type}/${child.type}`)}
                    cursor="pointer"
                  >
                    <Text
                      textTransform="capitalize"
                      color={
                        param.category === data.type &&
                        param.subCategory === child.type
                          ? "rgb(235, 69, 95)"
                          : null
                      }
                      fontWeight={
                        param.category === data.type &&
                        param.subCategory === child.type
                          ? "bold"
                          : null
                      }
                    >
                      {child.type}
                    </Text>
                  </Box>
                ))}
            </Flex>
          </Box>
        );
      })}
    </Box>
  );
};

export default function LayoutStore() {
  return (
    <Box h="100vh">
      <Box w="100%" px={{ base: 8, md: 20 }}>
        <Logo />
        <CrossbarComponent />
      </Box>
      <Flex>
        <Box w={"10%"} />
        <Flex
          w={"90%"}
          wrap={{ base: "wrap", md: "nowrap" }}
          mt={8}
          gap={{ base: 4, md: 0 }}
        >
          <Flex
            w={{ base: "100%", md: "30%" }}
            h={{ xl: 600, lg: 550, md: 500, base: "60px" }}
            px={{ md: 2, base: 8 }}
            display={{ base: "none", md: "flex" }}
          >
            <Flex
              borderWidth={1}
              borderColor="#273036"
              w={"100%"}
              borderRadius={10}
              overflow="hidden"
              px={4}
              py={3}
            >
              <MenuLevel />
            </Flex>
          </Flex>
          <Flex
            w={{ base: "100%", md: "70%" }}
            h={{ xl: 600, lg: 550, md: 500, base: 600 }}
            px={{ md: 2, base: 8 }}
          >
            <Flex
              borderWidth={1}
              borderColor="#273036"
              w={"100%"}
              borderRadius={10}
              px={2}
            >
              <Outlet />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
