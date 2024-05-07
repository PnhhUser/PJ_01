import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";
import { BiDollarCircle } from "react-icons/bi";
import { Link } from "react-router-dom";

const CardComponent = ({ title, price, urlImg }) => {
  return (
    <Card w="200px">
      <CardHeader
        p={2}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontFamily: "var(--font-poetsen)",
        }}
      ></CardHeader>
      <CardBody pt={0} px={2} pb={2}>
        <Link>
          <Flex
            w="100%"
            h="120px"
            borderRadius={10}
            color="#fff"
            justifyContent="center"
            alignItems="center"
            fontSize={24}
            style={{
              fontFamily: "var(--font-jaco)",
            }}
            overflow="hidden"
          >
            <Image
              src={urlImg}
              alt="copy"
              w="100%"
              h="100%"
              objectFit="scale-down"
            />
          </Flex>
        </Link>
      </CardBody>
      <CardFooter p={0} px={4} mb={5} flexDirection="column">
        <Link>
          <Text
            textTransform="capitalize"
            fontSize={12}
            style={{
              fontFamily: "var(--font-poetsen)",
            }}
          >
            {title}
          </Text>
        </Link>
        <Flex alignItems="center" justifyContent="end" mt={4}>
          <BiDollarCircle color="GrayText" fontSize={25} />
          <Text color="GrayText" ps={1} fontSize={14}>
            {price}
          </Text>
        </Flex>
      </CardFooter>
    </Card>
  );
};

export default function StorePage() {
  return (
    <Flex
      my={5}
      px={2}
      justifyContent={{ base: "center", md: "start" }}
      flexWrap="wrap"
      gap={4}
    >
      <CardComponent
        title="dragon scale fabric painting"
        price="80.00"
        urlImg="https://cdn.alongwalk.info/info/wp-content/uploads/2022/03/27234708/image-treo-tranh-rong-phong-thuy-va-nhung-dieu-ban-chua-biet-164837442895968.jpg"
      />
      <CardComponent
        title="dragon scale fabric painting"
        price="80.00"
        urlImg="https://cdn.alongwalk.info/info/wp-content/uploads/2022/03/27234708/image-treo-tranh-rong-phong-thuy-va-nhung-dieu-ban-chua-biet-164837442895968.jpg"
      />
    </Flex>
  );
}

//https://comely.vn/wp-content/uploads/2021/07/05072021A-1536x1476.png
