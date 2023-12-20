// React
import NextLink from "next/link";

// Chakra
import { Box, Center, Flex, Icon, Link, Text } from "@chakra-ui/react";
import { Tabs, TabList, Tab } from "@chakra-ui/react";

// Icons
import { FiGithub } from "react-icons/fi";

// Fonts
import { JetBrains_Mono } from "next/font/google";
const JetBrainsMono = JetBrains_Mono({ subsets: ["latin"] });

export default function Navbar() {
  return (
    <>
      <Box
        w={"100%"}
        h={"60px"}
        p={"10px"}
        color={"white"}
        fontWeight={"bold"}
        fontSize={"1.5rem"}
        textAlign={"center"}
        borderBottomRadius={"25px"}
        bgColor={"#332e45"}
        className={`${JetBrainsMono.className}`}
      >
        <Center>
          <Tabs variant={"unstyled"} colorScheme="gray">
            <TabList>
              <NextLink href={"/"}>
                <Tab
                  w={"80px"}
                  _hover={{
                    color: "#a393dd",
                    transition: "color 0.2s linear",
                    cursor: "pointer",
                  }}
                  _selected={{ borderBottom: "#877ab7 2px solid" }}
                >
                  <Text
                    _hover={{
                      color: "#a393dd",
                      transition: "color 0.2s linear",
                      cursor: "pointer",
                    }}
                  >
                    home
                  </Text>
                </Tab>
              </NextLink>
              <Box w="10px" /> {/* Add space here */}
              <NextLink href={"/projects"}>
                <Tab
                  w={"80px"}
                  _hover={{
                    color: "#a393dd",
                    transition: "color 0.2s linear",
                    cursor: "pointer",
                  }}
                  _selected={{ borderBottom: "#877ab7 2px solid" }}
                >
                  <Text>projects</Text>
                </Tab>
              </NextLink>
              <Box w="10px" /> {/* Add space here */}
              <NextLink href={"/socials"}>
                <Tab
                  w={"80px"}
                  _hover={{
                    color: "#a393dd",
                    transition: "color 0.2s linear",
                    cursor: "pointer",
                  }}
                  _selected={{ borderBottom: "#877ab7 2px solid" }}
                >
                  <Text>socials</Text>
                </Tab>
              </NextLink>
            </TabList>
          </Tabs>
          <Flex
            position={"absolute"}
            right={"10px"}
            paddingTop={"5px"}
            paddingRight={"5px"}
          >
            <Link href="https://github.com/durpyneko/website" target="_blank">
              <Icon
                as={FiGithub}
                _hover={{
                  color: "#a393dd",
                  transition: "color 0.2s linear",
                }}
              ></Icon>
            </Link>
          </Flex>
        </Center>
      </Box>
    </>
  );
}
