import React from "react";
import {
  Box,
  Flex,
  HStack,
  Image,
  Text,
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
  Button,
  useColorMode,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Icon
} from "@chakra-ui/react";
import { HamburgerIcon, MoonIcon, SunIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { FaPlus, FaHotel, FaClipboardList } from "react-icons/fa";
import SearchBar from "./ui/Searchbar";

const Navbar: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("white", "gray.800");

  return (
    <Box bg={bg} px={4} py={3}>
      <Flex alignItems="center" justifyContent="space-between">
        <Box display='flex' alignItems='center'>
          <Link href="/" fontSize="xl" fontWeight="bold">
            <Image src='/brand.png' alt='hotel-ranking-logo' w= '45px'ml='.5rem'/>
          </Link>
          <Text display={{ base: "none", md: "flex" }}>Hotel Ranking</Text>
        </Box>
        <Box ml={{ base: '.5rem', sm: '0'}}>
          <SearchBar />
        </Box>
        {/* <Spacer /> */}
        <HStack display={{ base: "none", md: "flex" }} spacing={6}>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              variant="ghost"
            >
              Services
            </MenuButton>
            <MenuList>
              <MenuItem>
                <Icon as={FaPlus} mr={2} />
                Add Hotel
              </MenuItem>
              <MenuItem>
                <Icon as={FaHotel} mr={2} />
                My Hotels
              </MenuItem>
              <MenuItem>
                <Icon as={FaClipboardList} mr={2} />
                My Bookings
              </MenuItem>
            </MenuList>
          </Menu>
          <IconButton
                aria-label="Toggle dark mode"
                icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
                onClick={toggleColorMode}
              />
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
              <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              variant="ghost"
            >
              Services
            </MenuButton>
            <MenuList>
              <MenuItem>
                <Icon as={FaPlus} mr={2} />
                Add Hotel
              </MenuItem>
              <MenuItem>
                <Icon as={FaHotel} mr={2} />
                My Hotels
              </MenuItem>
              <MenuItem>
                <Icon as={FaClipboardList} mr={2} />
                My Bookings
              </MenuItem>
            </MenuList>
          </Menu>
              <IconButton
                aria-label="Toggle dark mode"
                icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
                onClick={toggleColorMode}
              />
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Navbar;
