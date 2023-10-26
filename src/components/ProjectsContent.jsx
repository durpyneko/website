// Chakra Imports
import { Box, Center, Text, Flex } from "@chakra-ui/react";

// Fonts
import { JetBrains_Mono } from "next/font/google";
const JetBrainsMono = JetBrains_Mono({ subsets: ["latin"] });

export default function HomeContent() {
  return (
    <>
        <Center>
          <Box w={{ base: "100vw", md: "70vw" }} // Set to 100vw on smaller screens
           p={"20px"} className={`${JetBrainsMono.className}`}>
            <Flex maxW={"4xl"}>
            <Text fontSize={"md"} p={"20px"}>
              {
                "Projects"
              }
            </Text>
          </Flex>
          </Box>
        </Center>
    </>
  );
}
