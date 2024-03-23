import React from "react";
import {
  Box,
  Flex,
  Spacer,
  HStack,
  VStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  Link,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const Navbar: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const bg = useColorModeValue("white", "gray.800");

  return (
    <Box bg={bg} px={4} py={3}>
      <Flex alignItems="center" justifyContent="space-between">
        <Box>
          <Link href="/" fontSize="xl" fontWeight="bold">
            Hotel Ranking
          </Link>
        </Box>
        <Spacer />
        <HStack display={{ base: "none", md: "flex" }} spacing={6}>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/contact">Contact</Link>
        </HStack>
        <IconButton
          display={{ base: "flex", md: "none" }}
          onClick={onOpen}
          icon={<HamburgerIcon />}
          aria-label="Menu"
        />
      </Flex>

      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <VStack spacing={4}>
              <Link href="/about">About</Link>
              <Link href="/services">Services</Link>
              <Link href="/portfolio">Portfolio</Link>
              <Link href="/contact">Contact</Link>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Navbar;
