import { Box, Flex, Spacer } from "@chakra-ui/react";
import { useState } from "react";
import {
  AiOutlineAppstore,
  AiOutlineClose,
  AiOutlineHome,
  AiOutlineLogin,
  AiOutlineLogout,
  AiOutlineShop,
} from "react-icons/ai";
import { BsCardText } from "react-icons/bs";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../contexts/cartContext";
import { useAuth } from "../contexts/authContext";
import { FaUser } from "react-icons/fa";
import { logout } from "../utils";

const FunctionNavBar = ({ linkName, children, onClick, isSize }) => {
  const location = useLocation();

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
        state={{ search: location?.pathname }}
      >
        {children}
      </NavLink>
    </Box>
  );
};

export const Navbar = function () {
  const [isSize, setIsSize] = useState(false);
  const { user, role, isLoading } = useAuth();
  const { onOpen } = useCart();
  const navigate = useNavigate();

  const handleSizeNavbar = () => {
    setIsSize((isSize) => !isSize);
  };

  const handleOpenCart = () => {
    onOpen();
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  if (!isLoading) return;

  const linkname = role === 99 ? "dashboard" : "personal";

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
        boxShadow: "1px 1px 2px #fff",
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
        linkName={null}
        children={<BsCardText />}
        onClick={handleOpenCart}
        isSize={isSize}
      />
      {user ? (
        <>
          <FunctionNavBar
            isSize={isSize}
            linkName={linkname}
            children={<FaUser />}
          />
          <FunctionNavBar
            isSize={isSize}
            linkName={null}
            children={<AiOutlineLogout />}
            onClick={handleLogout}
          />
        </>
      ) : (
        <FunctionNavBar
          linkName={"login"}
          children={<AiOutlineLogin style={{ strokeWidth: 20 }} />}
          isSize={isSize}
        />
      )}

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
