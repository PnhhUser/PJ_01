import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  List,
  ListItem,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useAuth } from "../contexts/authContext";
import { LoadingComponent } from "../Components/loadingComponent";
import { Form, Link, useLocation } from "react-router-dom";
import {
  AiFillEdit,
  AiOutlineCheck,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
import { useEffect, useRef, useState } from "react";
import { changeEmail } from "../utils";

const BackComponent = () => {
  const location = useLocation();

  return (
    <Box ps={2} mt={10}>
      <Link
        to={location?.state?.search}
        style={{
          fontSize: 20,
          fontFamily: "var(--font-jaco)",
        }}
      >
        Back
      </Link>
    </Box>
  );
};

export default function PersonalPage() {
  const { user, person, isloading } = useAuth();
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const [isdisabled, setIsDisabled] = useState(true);
  const emailRef = useRef();
  const toast = useToast({
    position: "top-right",
  });

  useEffect(() => {
    emailRef.current.defaultValue = user?.email;
    emailRef.current.disabled = isdisabled;
  }, [user, isdisabled]);

  if (isloading) return <LoadingComponent />;

  const handleChangeEmail = () => {
    setIsDisabled(false);
  };

  const handleUpdateEmail = () => {
    setIsDisabled(true);
    const emailNew = emailRef.current.value;

    changeEmail(person, emailNew);

    toast({
      title: "update",
      description: "update email success",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="3xl">
      <BackComponent />
      <Flex alignItems="end" py={5}>
        <Box borderRadius={99} w={100} h={100} bg="#273036"></Box>
        <Text
          ps={3}
          pb={3}
          textTransform="capitalize"
          style={{
            fontFamily: "var(--font-jaco)",
          }}
        >
          {person?.username}
        </Text>
      </Flex>
      <Flex mt={10} flexDirection={{ base: "column", md: "row" }}>
        <Box w={{ base: "100%", md: "30%" }} mb={5}>
          <Text
            as="h2"
            fontSize={20}
            style={{
              fontFamily: "var(--font-jaco)",
            }}
            textTransform="capitalize"
          >
            Infomation
          </Text>
          <List>
            <ListItem fontSize={14}> Email: {person?.email}</ListItem>
          </List>
        </Box>
        <Flex w={{ base: "100%", md: "70%" }} justifyContent="center">
          <Form method="post">
            <FormControl w={{ base: 250, md: 300 }}>
              <FormLabel
                fontSize={14}
                style={{
                  fontFamily: "var(--font-jaco)",
                }}
                textTransform="capitalize"
              >
                Email address
              </FormLabel>
              <Flex alignItems="center">
                <Input
                  ref={emailRef}
                  type="email"
                  name="email"
                  fontSize={14}
                  borderColor="#273036"
                  autoComplete="off"
                />
                <Box ps={2} color="gray.600" cursor="pointer">
                  {isdisabled ? (
                    <AiFillEdit onClick={handleChangeEmail} />
                  ) : (
                    <AiOutlineCheck onClick={handleUpdateEmail} />
                  )}
                </Box>
              </Flex>
            </FormControl>
            <FormControl w={{ base: 250, md: 300 }} mt={5}>
              <FormLabel
                fontSize={14}
                style={{
                  fontFamily: "var(--font-jaco)",
                }}
                textTransform="capitalize"
              >
                change the password
              </FormLabel>
              <Flex alignItems="center">
                <InputGroup>
                  <Input
                    type={show && !isdisabled ? "text" : "password"}
                    name="password"
                    fontSize={14}
                    borderColor="#273036"
                  />
                  <InputRightElement>
                    <Button
                      h="1.75rem"
                      size="sm"
                      bg="#fff"
                      onClick={handleClick}
                      _hover={{ bg: "#fff" }}
                      color="gray.300"
                    >
                      {show && !isdisabled ? (
                        <AiOutlineEyeInvisible />
                      ) : (
                        <AiOutlineEye />
                      )}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <Box ps={2} color="gray.600" cursor="pointer">
                  <AiFillEdit />
                </Box>
              </Flex>
            </FormControl>
          </Form>
        </Flex>
      </Flex>
    </Container>
  );
}
