// React
import { useState } from "react";

// Chakra Imports
import { Box, Center, Flex, Icon, Link, Text } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

// Icons
import { FiGithub } from "react-icons/fi";

// Fonts
import { JetBrains_Mono } from "next/font/google";
const JetBrainsMono = JetBrains_Mono({ subsets: ["latin"] });

/* interface NavbarProps {
  setActiveTab: (tab: string) => void;
} */

export default function Navbar({ setActiveTab }: { setActiveTab: any }) {
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
      >
        <Center>
          <Tabs
            variant={"unstyled"}
            className={`${JetBrainsMono.className}`}
            colorScheme="gray"
          >
            <TabList>
              <Tab
                w={"80px"}
                _hover={{
                  color: "#a393dd",
                  transition: "color 0.2s linear",
                  cursor: "pointer",
                }}
                _selected={{ borderBottom: "#877ab7 2px solid" }}
                onClick={() => setActiveTab("home")}
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
              <Box w="10px" /> {/* Add space here */}
              <Tab
                w={"80px"}
                _hover={{
                  color: "#a393dd",
                  transition: "color 0.2s linear",
                  cursor: "pointer",
                }}
                _selected={{ borderBottom: "#877ab7 2px solid" }}
                onClick={() => setActiveTab("projects")}
              >
                <Text>pojects</Text>
              </Tab>
              <Box w="10px" /> {/* Add space here */}
              <Tab
                w={"80px"}
                _hover={{
                  color: "#a393dd",
                  transition: "color 0.2s linear",
                  cursor: "pointer",
                }}
                _selected={{ borderBottom: "#877ab7 2px solid" }}
                onClick={() => setActiveTab("socials")}
              >
                <Text>socials</Text>
              </Tab>
            </TabList>
          </Tabs>
          <Flex
            position={"absolute"}
            right={"10px"}
            paddingTop={"5px"}
            paddingRight={"5px"}
          >
            <Link
              href="https://github.com/idurpyDude12/website"
              target="_blank"
            >
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
