import { Box, Flex, Spacer } from "@chakra-ui/react";
import { useState } from "react";
import {
  AiOutlineAppstore,
  AiOutlineClose,
  AiOutlineHome,
  AiOutlineLogin,
  AiOutlineShop,
  AiOutlineUserAdd,
} from "react-icons/ai";
import { NavLink } from "react-router-dom";

const FunctionNavBar = ({ linkName, children, onClick, isSize }) => {
  const styleProps = {
    color: "#273036",
    display: "flex",
    borderRadius: "50%",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  };

  const activePops = {
    ...styleProps,
    color: "#EB455F",
  };

  if (linkName === null) {
    return (
      <Box
        bg="#fff"
        boxSize={30}
        borderRadius={30}
        cursor="pointer"
        pos={isSize ? "absolute" : null}
        onClick={typeof onClick === "function" ? onClick : null}
      >
        <Box style={styleProps}>{children}</Box>
      </Box>
    );
  }

  return (
    <Box
      bg="#fff"
      boxSize={30}
      borderRadius={30}
      cursor="pointer"
      pos={isSize ? "absolute" : null}
      onClick={typeof onClick === "function" ? onClick : null}
    >
      <NavLink
        to={linkName}
        style={({ isActive }) => {
          return isActive && linkName ? activePops : styleProps;
        }}
      >
        {children}
      </NavLink>
    </Box>
  );
};

export const Navbar = function () {
  const [isSize, setIsSize] = useState(false);

  const handleSizeNavbar = () => {
    setIsSize((isSize) => !isSize);
  };

  return (
    <Flex
      flexDirection="column"
      pos="fixed"
      top={isSize ? "94%" : "50%"}
      zIndex={99}
      bg="#273036"
      gap={15}
      w={{ base: "50px", md: "60px" }}
      h={isSize ? { base: "50px", md: "60px" } : "50vh"}
      borderRadius={30}
      ms={2}
      alignItems="center"
      justifyContent="center"
      py={15}
      style={{
        transform: "translateY(-50%)",
        transition: ".6s",
        boxShadow: "4px 4px 10px #a1a1a1",
      }}
    >
      <FunctionNavBar
        linkName={"/"}
        children={<AiOutlineHome style={{ strokeWidth: 20 }} />}
        isSize={isSize}
      />
      <FunctionNavBar
        linkName={"store"}
        children={<AiOutlineShop style={{ strokeWidth: 20 }} />}
        isSize={isSize}
      />
      <FunctionNavBar
        linkName={"login"}
        children={<AiOutlineLogin style={{ strokeWidth: 20 }} />}
        isSize={isSize}
      />
      <FunctionNavBar
        linkName={"register"}
        children={<AiOutlineUserAdd style={{ strokeWidth: 20 }} />}
        isSize={isSize}
      />
      <Spacer />
      <FunctionNavBar
        linkName={null}
        children={
          isSize ? (
            <AiOutlineAppstore style={{ strokeWidth: 20 }} />
          ) : (
            <AiOutlineClose style={{ strokeWidth: 20 }} />
          )
        }
        onClick={handleSizeNavbar}
        isSize={isSize}
      />
    </Flex>
  );
};
