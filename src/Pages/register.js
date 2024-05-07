import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import { Form, Link } from "react-router-dom";

const sleep = (ms) => new Promise((resolve) => setTimeout(() => resolve(), ms));

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");

  await sleep(5000);

  console.log(email);

  return null;
}

const SignUpForm = () => {
  return (
    <Box
      w={{ base: 300, md: 400 }}
      borderWidth={1}
      p={5}
      borderRadius={8}
      shadow="lg"
    >
      <Box mb={5}>
        <Text
          fontSize={30}
          style={{
            fontFamily: "var(--font-jaco)",
          }}
        >
          {" "}
          Register Form{" "}
        </Text>
      </Box>
      <Form method="post">
        <FormControl mb={5}>
          <FormLabel
            fontSize={14}
            style={{
              fontFamily: "var(--font-jaco)",
            }}
          >
            Name
          </FormLabel>
          <Input type="text" name="username" />
        </FormControl>
        <FormControl mb={5}>
          <FormLabel
            fontSize={14}
            style={{
              fontFamily: "var(--font-jaco)",
            }}
          >
            Email address
          </FormLabel>
          <Input type="email" name="email" />
        </FormControl>
        <FormControl mb={5}>
          <FormLabel
            fontSize={14}
            style={{
              fontFamily: "var(--font-jaco)",
            }}
          >
            Password
          </FormLabel>
          <Input type="password" name="email" />
        </FormControl>
        <Flex justifyContent="start">
          <Link
            to="/login"
            style={{
              fontSize: 12,
              color: "#3289e1",
              paddingInlineStart: 10,
            }}
          >
            Login here
          </Link>
        </Flex>
        <Flex justifyContent="start">
          <Button
            mt={4}
            mb={10}
            color="#fff"
            bg="#273036"
            type="submit"
            _hover={{ bg: "#273036" }}
          >
            Register
          </Button>
        </Flex>
      </Form>
    </Box>
  );
};

export default function RegisterPage() {
  return (
    <Flex w="100%" justifyContent="center" alignItems="center" h="100vh">
      <SignUpForm />
    </Flex>
  );
}
