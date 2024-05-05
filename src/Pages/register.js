import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { ErrorForm } from "../Components/errorForm";
import { Form, useNavigation } from "react-router-dom";
import { MdKey, MdOutlineEmail } from "react-icons/md";
import { useState } from "react";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineUser,
} from "react-icons/ai";
import { SignInOther } from "../Components/signInOther";
import { motion } from "framer-motion";
import { FaGear } from "react-icons/fa6";
import { Logo } from "../Components/logo";

const sleep = (ms) => new Promise((resolve) => setTimeout(() => resolve(), ms));

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");

  await sleep(5000);

  console.log(email);

  return null;
}

const FormRegister = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigation = useNavigation();

  return (
    <Form method="post">
      <ErrorForm />
      <Flex gap={5} flexDirection="column" alignItems="end">
        <InputGroup w={{ base: "100%", md: 350 }}>
          <InputLeftElement>
            <AiOutlineUser />
          </InputLeftElement>
          <Input
            type="text"
            bg="#fff"
            name="email"
            fontSize={14}
            focusBorderColor="#fff"
            autoComplete="off"
            letterSpacing={1}
          />
        </InputGroup>
        <InputGroup w={{ base: "100%", md: 350 }}>
          <InputLeftElement>
            <MdOutlineEmail />
          </InputLeftElement>
          <Input
            type="email"
            bg="#fff"
            name="email"
            fontSize={14}
            focusBorderColor="#fff"
            autoComplete="off"
            letterSpacing={1}
          />
        </InputGroup>
        <InputGroup w={{ base: "100%", md: 350 }}>
          <InputLeftElement>
            <MdKey />
          </InputLeftElement>
          <Input
            type={isVisible ? "text" : "password"}
            bg="#fff"
            name={isVisible ? "text" : "password"}
            fontSize={14}
            focusBorderColor="#fff"
            autoComplete="new-password"
          />
          <InputRightElement>
            <Box onClick={() => setIsVisible(!isVisible)}>
              {isVisible ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            </Box>
          </InputRightElement>
        </InputGroup>
        <Button type="submit" w={100} fontSize={14} fontWeight="bold">
          {navigation.state === "submitting" ? "Loading..." : "Sign Up"}
        </Button>
      </Flex>
      <SignInOther />
    </Form>
  );
};

const TabComponent = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <Tabs
      bg="#273036"
      w={{ base: "85%", md: "100%" }}
      h={500}
      borderStartRadius={100}
      ps={4}
      variant="unstyled"
      onChange={(index) => setTabIndex(index)}
      pos="relative"
    >
      <TabList>
        <Tab
          bg="#fff"
          w={100}
          style={{
            fontFamily: "var(--font-poetsen)",
            transform: "translateY(-20px)",
          }}
          borderBottomRadius={20}
          color={tabIndex === 0 ? "rgb(235, 69, 95)" : "#273036"}
          mr={1}
        >
          Register
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <FormRegister />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default function RegisterPage() {
  const navigation = useNavigation();

  return (
    <Flex>
      <Box w={{ base: "10%", md: "50%" }} pos="relative">
        <Logo
          styleProps={{
            marginLeft: 10,
          }}
        />
        <Box
          pos="absolute"
          top="30%"
          left={{ base: "20%", md: "30%" }}
          display={{ base: "none", md: "block" }}
          visibility={navigation.state === "submitting" ? "visible" : "hidden"}
        >
          <motion.div
            animate={{ rotate: navigation.state === "submitting" ? 180 : 0 }}
            transition={{
              repeat: navigation.state === "submitting" ? Infinity : 0,
              duration: 3,
              ease: "linear",
            }}
          >
            <Flex justifyContent="center" alignItems="center">
              <FaGear fontSize={110} color="#273036" />
            </Flex>
          </motion.div>
          <motion.div
            style={{ marginLeft: 140, marginTop: -35 }}
            animate={{ rotate: navigation.state === "submitting" ? -180 : 0 }}
            transition={{
              repeat: navigation.state === "submitting" ? Infinity : 0,
              duration: 3,
              ease: "linear",
            }}
          >
            <Flex justifyContent="center" alignItems="center">
              <FaGear fontSize={90} color="#273036" />
            </Flex>
          </motion.div>
        </Box>
      </Box>
      <Flex
        w={{ base: "90%", md: "50%" }}
        justifyContent="end"
        alignItems="center"
        h="100vh"
      >
        <TabComponent />
      </Flex>
    </Flex>
  );
}
