// Chakra Imports
import { Box, Center, Text, HStack, Image, Flex } from "@chakra-ui/react";

// Fonts
import { JetBrains_Mono } from "next/font/google";
const JetBrainsMono = JetBrains_Mono({ subsets: ["latin"] });

export default function HomeContent() {
  return (
    <>
      <Center>
        <Box
          w={{ base: "100vw", md: "70vw" }} // Set to 100vw on smaller screens
          p={"20px"}
          className={`${JetBrainsMono.className}`}
        >
          <HStack>
            <Image
              style={{ borderRadius: "50%" }}
              src="/profile.png"
              boxSize={"55px"}
              loading="lazy"
            />
            <Text fontSize="3xl">
              Hey, I'm{" "}
              <Text
                as="span"
                className="username-gradient"
                /* color={"#877ab7"} */
                fontSize="3xl"
                _hover={{
                  borderBottom: "#877ab7 2px solid",
                  transition: "border-bottom 0.08s linear",
                }}
              >
                durpyneko
              </Text>
              !
            </Text>
          </HStack>
          <Flex
            maxW={"6xl"}
            p={"2px"}
            margin={"10px"}
            backgroundColor={"#332e45"}
            borderRadius={"8px"}
          >
            <Text fontSize={"md"} p={"20px"}>
              {
                "Welcome to my site! I like to play video games and program in my freetime. I mostly program in JavaScript/Typescript but plan to learn Rust and C/C++ soon for applications and reverse engineering. I have a good understanding of Python."
              }
            </Text>
          </Flex>
        </Box>
      </Center>
    </>
  );
}
