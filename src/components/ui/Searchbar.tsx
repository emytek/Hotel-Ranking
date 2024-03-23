import React, { useState } from "react";
import { Stack, IconButton, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const SearchBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Stack spacing={4}>
    <InputGroup width={{ base: "60%", sm: "80%" }} maxWidth="400px">
    <InputLeftElement pointerEvents='none'>
    <SearchIcon color="gray.300" />
    </InputLeftElement>
    <Input type='text' placeholder='Search' />
  </InputGroup>
</Stack>
  );
};

export default SearchBar;
