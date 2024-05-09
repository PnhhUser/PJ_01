import { Box } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";

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

export default function UsersPage() {
  return (
    <h1>
      <BackComponent />
    </h1>
  );
}
