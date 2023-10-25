// Chakra Imports
import { Box, Center } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <>
      <Center>
        <Box
          w={"100%"}
          h={"60px"}
          p={"10px"}
          color={"white"}
          fontWeight={"bold"}
          fontSize={"1.5rem"}
          textAlign={"center"}
          borderBottomRadius={"10px"}
          bgColor={"#332e45"}
        >
          Navbar
        </Box>
      </Center>
    </>
  );
}
