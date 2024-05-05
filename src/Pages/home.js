import { Box, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { Logo } from "../Components/logo";
import { CrossbarComponent } from "../Components/corssbar";

const Sologan = () => {
  return (
    <Flex
      h="100%"
      flexDirection="column"
      justifyContent={{ base: "start", md: "center" }}
      alignItems={{ base: "center", md: "start" }}
      gap={{ base: 5, md: 10 }}
      px={{ base: 0, md: 5 }}
      pb={{ base: 0, md: 20 }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.6,
          delay: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <Flex mt={5}>
          <Text
            color="#273036"
            px={{ base: 10, md: 0 }}
            fontWeight="bold"
            fontSize={18}
            textAlign={{ base: "right", md: "left" }}
            style={{ fontFamily: "var(--font-jaco)" }}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat
            neque veritatis tempora ipsa reiciendis deleniti ducimus consequatur
            consectetur mollitia dolorem magnam, sint corporis ab saepe earum
            molestias architecto, modi vel.
          </Text>
        </Flex>
      </motion.div>
      <ButtonShop />
    </Flex>
  );
};

const ButtonShop = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.8,
        delay: 0.4,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <Link to="store">
        <Flex
          bg="#EB455F"
          color="#fff"
          w={150}
          h={{ base: 10, md: 50 }}
          alignItems="center"
          justifyContent="center"
          fontWeight="bold"
          fontSize={{ base: 14, md: 18 }}
          borderRadius={50}
          textTransform="capitalize"
        >
          shop
        </Flex>
      </Link>
    </motion.div>
  );
};

const Slide = () => {
  const styleSwiperProps = {
    width: "300px",
    height: "100%",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    padding: 10,
  };

  const slides = [
    {
      url: "",
      alt: "slide 1",
    },
    {
      url: "",
      alt: "slide 2",
    },
    {
      url: "",
      alt: "slide 3",
    },
  ];

  return (
    <Flex mt={5} px={10}>
      <Box
        bg="#273036"
        w="100%"
        h={{ base: 250, md: 500 }}
        borderRadius={10}
        overflow="hidden"
        pos="relative"
      >
        <Swiper
          style={styleSwiperProps}
          modules={[Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          autoplay={{
            delay: 2500,
          }}
          loop={true}
        >
          {slides.map((slide, index) => {
            return (
              <SwiperSlide
                key={index}
                style={{
                  background: "#273036",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#fff",
                }}
              >
                {slide.alt}
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Box>
    </Flex>
  );
};

export default function HomePage() {
  return (
    <Box h="100vh">
      <Box w="100%" px={{ base: 8, md: 20 }}>
        <Logo />
        <CrossbarComponent />
      </Box>
      <Flex>
        <Box w={"10%"} />
        <Flex w={"90%"} wrap={{ base: "wrap", md: "nowrap" }}>
          <Box w={"100%"}>
            <Slide />
          </Box>
          <Box w={"100%"}>
            <Sologan />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}
