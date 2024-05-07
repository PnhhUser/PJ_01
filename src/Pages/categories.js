import { Card, CardBody, Flex, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

export default function CategoriesPage() {
  const params = useParams();

  return (
    <Flex>
      <Card>
        <CardBody>
          <Text>View a summary of all your customers over the last month.</Text>
        </CardBody>
      </Card>
    </Flex>
  );
}
