import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { Logo } from "../Components/logo";
import { CrossbarComponent } from "../Components/corssbar";
import { useNavigate, Outlet, useParams } from "react-router-dom";
import dataJson from "../data.json";
import { useState } from "react";
import { BiSearch, BiStore } from "react-icons/bi";
import { AiFillCaretRight } from "react-icons/ai";
import Pagination from "pagination-component";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

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
        style={{ fontFamily: "var(--font-poetsen)" }}
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
                  style={{ fontFamily: "var(--font-poetsen)" }}
                  color={
                    param.category === data.type ? "rgb(235, 69, 95)" : null
                  }
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
                      style={{ fontFamily: "var(--font-poetsen)" }}
                      textTransform="capitalize"
                      color={
                        param.category === data.type &&
                        param.subCategory === child.type
                          ? "rgb(235, 69, 95)"
                          : null
                      }
                      ps={
                        param.category === data.type &&
                        param.subCategory === child.type
                          ? 5
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

const TitleComponent = () => {
  const param = useParams();
  const titleParent = param?.category !== undefined ? param.category : "all";
  const titleChild =
    param?.subCategory !== undefined ? param.subCategory : null;
  return (
    <Flex
      borderWidth={1}
      borderColor="#273036"
      w="100%"
      h="30px"
      mt={2}
      borderRadius={5}
      ps={2}
      alignItems="center"
    >
      <Flex w={{ base: "30%", md: "100%" }}>
        <BiStore color="#273036" fontSize={25} />
        <Text
          textTransform="capitalize"
          px={2}
          style={{ fontFamily: "var(--font-jaco)" }}
        >
          {titleParent}
          {param?.subCategory && ` - ${titleChild}`}
        </Text>
      </Flex>
      <SearchComponent />
    </Flex>
  );
};

const SearchComponent = () => {
  return (
    <Box
      display={{ md: "none", base: "block" }}
      w={{ base: "70%", md: "100%" }}
    >
      <InputGroup size="sm">
        <InputLeftElement>
          <AiFillCaretRight color="#a1a1a1" fontSize={12} />
        </InputLeftElement>
        <Input
          placeholder="Search"
          fontSize={12}
          borderColor={0}
          h={30}
          borderWidth={0}
          borderRadius={5}
          focusBorderColor="transparent"
          name="search"
        />
        <InputRightElement>
          <BiSearch color="#a1a1a1" fontSize={12} />
        </InputRightElement>
      </InputGroup>
    </Box>
  );
};

const PaginationComponent = () => {
  const itemStyle = {
    float: "left",
    backgroundColor: "white",
    color: "#273036",
    cursor: "pointer",
    width: "25px",
    border: "1px solid",
    borderRadius: "5px",
    margin: "0 4px",
    fontSize: 14,
  };
  return (
    <Flex justifyContent="center" alignItems="center" mb={5}>
      <Pagination
        initialPage={1}
        show={10}
        pageCount={5}
        onChange={(page) => console.log(page)}
      >
        {({
          setPage,
          page,
          index,
          currentPage,
          isPrev,
          isNext,
          isCurrentPage,
        }) => {
          if (isPrev)
            return (
              <div
                style={{
                  ...itemStyle,
                  width: "25px",
                  height: "25px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onClick={() => setPage({ prev: true })}
              >
                <FaAngleLeft />
              </div>
            );

          if (isNext)
            return (
              <div
                style={{
                  ...itemStyle,
                  width: "25px",
                  height: "25px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onClick={() => setPage({ next: true })}
              >
                <FaAngleRight />
              </div>
            );

          return (
            <div
              key={index}
              style={{
                ...itemStyle,
                textAlign: "center",
                lineHeight: "25px",
                backgroundColor: isCurrentPage ? "#273036" : "white",
                color: isCurrentPage ? "#fff" : "#273036",
              }}
              onClick={() => {
                console.log(
                  `Navigating from page ${currentPage} to page ${page}`
                );
                setPage({ page });
              }}
            >
              <h1>{page}</h1>
            </div>
          );
        }}
      </Pagination>
    </Flex>
  );
};

export default function LayoutStore() {
  return (
    <Box>
      <Box w="100%" px={{ base: 8, md: 20 }}>
        <Logo />
        <CrossbarComponent />
      </Box>
      <Flex>
        <Flex
          w={"100%"}
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
              borderColor={{ base: "#d7e2e9", md: "#273036" }}
              w={"100%"}
              borderRadius={10}
              px={2}
              flexDirection="column"
              justifyContent="space-between"
            >
              <Box>
                <Flex w={"100%"}>
                  <TitleComponent />
                </Flex>
                <Box w={"100%"}>
                  <Outlet />
                </Box>
              </Box>
              <Box>
                <PaginationComponent />
              </Box>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
