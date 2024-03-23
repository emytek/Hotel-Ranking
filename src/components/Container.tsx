import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <Box
      maxW="1920px"
      w="100%"
      mx="auto"
      px={{ base: "4", xl: "20" }}
      py="4"
    >
      {children}
    </Box>
  );
};

export default Container;
