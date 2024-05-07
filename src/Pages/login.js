import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import {
  Form,
  Link,
  redirect,
  useActionData,
  useNavigation,
} from "react-router-dom";
import { ErrorForm } from "../Components/errorForm";
import { signIn } from "../utils";

const sleep = (ms) => new Promise((resolve) => setTimeout(() => resolve(), ms));

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");

  await sleep(5000);

  if (email.length === 0 || password.length === 0) {
    return "Fields cannot be empty";
  }

  if (password.length < 6) {
    return "Password greater than 6 characters";
  }

  await signIn(email, password);

  return redirect("/");
}

const LoginForm = () => {
  const navigation = useNavigation();
  let errorMessage = useActionData();

  errorMessage =
    errorMessage === undefined || errorMessage === null ? "" : errorMessage;

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
          Login Form{" "}
        </Text>
      </Box>
      <Form method="post">
        <ErrorForm message={errorMessage} />
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
          <Input type="password" name="password" />
        </FormControl>
        <Flex justifyContent="start">
          <Link
            to="/register"
            style={{
              fontSize: 12,
              color: "#3289e1",
              paddingInlineStart: 10,
            }}
          >
            sign up here
          </Link>
        </Flex>
        <Flex justifyContent="start">
          {navigation.state === "submitting" ? (
            <Button
              mt={4}
              mb={10}
              color="#fff"
              bg="#273036"
              type="submit"
              _hover={{ bg: "#273036" }}
              isLoading
              loadingText="Loading"
            />
          ) : (
            <Button
              mt={4}
              mb={10}
              color="#fff"
              bg="#273036"
              type="submit"
              _hover={{ bg: "#273036" }}
            >
              Login
            </Button>
          )}
        </Flex>
      </Form>
    </Box>
  );
};

export default function LoginPage() {
  return (
    <Flex w="100%" justifyContent="center" alignItems="center" h="100vh">
      <LoginForm />
    </Flex>
  );
}
