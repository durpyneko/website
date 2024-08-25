// React
import NextLink from "next/link";

// Chakra
import {
  Box,
  Center,
  Flex,
  Icon,
  Link,
  Text,
  useTheme,
} from "@chakra-ui/react";
import { Tabs, TabList, Tab } from "@chakra-ui/react";

// Icons
import { FiGithub } from "react-icons/fi";

// Fonts
import { JetBrains_Mono } from "next/font/google";
const JetBrainsMono = JetBrains_Mono({ subsets: ["latin"] });

export default function Navbar() {
  const theme = useTheme();
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
        /* position={"sticky"}
        top={0} */
        borderBottomRadius={"25px"}
        bgColor={theme.accent.transparent}
        // style={{ backdropFilter: "blur(20px)" }}
        className={JetBrainsMono.className}
        bg={"rgba(255, 255, 255, 0.05)"}
        backdropFilter={"blur(10px)"}
        border={"1px solid rgba(255, 255, 255, 0.2)"}
      >
        <Center>
          <Tabs variant={"unstyled"} colorScheme="gray">
            <TabList
              _selected={{
                borderBottom: `${theme.accent.light} 2px solid`,
              }}
            >
              <NextLink href={"/"}>
                <Tab
                  w={"80px"}
                  _hover={{
                    color: theme.accent.light,
                    transition: "color 0.2s linear",
                    cursor: "pointer",
                  }}
                  _selected={{
                    position: "relative",
                    borderBottom: `${theme.accent.light} 2px solid`,
                  }}
                >
                  <Text
                    _hover={{
                      color: theme.accent.light,
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
                    color: theme.accent.light,
                    transition: "color 0.2s linear",
                    cursor: "pointer",
                  }}
                  _selected={{
                    borderBottom: `${theme.accent.light} 2px solid`,
                  }}
                >
                  <Text>projects</Text>
                </Tab>
              </NextLink>
              <Box w="10px" /> {/* Add space here */}
              <NextLink href={"/socials"}>
                <Tab
                  w={"80px"}
                  _hover={{
                    color: theme.accent.light,
                    transition: "color 0.2s linear",
                    cursor: "pointer",
                  }}
                  _selected={{
                    borderBottom: `${theme.accent.light} 2px solid`,
                  }}
                >
                  <Text>socials</Text>
                </Tab>
              </NextLink>
              <Box w="10px" /> {/* Add space here */}
              <NextLink href={"/about"}>
                <Tab
                  w={"80px"}
                  _hover={{
                    color: theme.accent.light,
                    transition: "color 0.2s linear",
                    cursor: "pointer",
                  }}
                  _selected={{
                    borderBottom: `${theme.accent.light} 2px solid`,
                  }}
                >
                  <Text>about</Text>
                </Tab>
              </NextLink>
            </TabList>
          </Tabs>
          <Flex
            position={"absolute"}
            right={"10px"}
            paddingTop={"5px"}
            paddingRight={"5px"}
            display={{ base: "none", sm: "flex" }}
          >
            <Link href="https://github.com/durpyneko/website" target="_blank">
              <Icon
                as={FiGithub}
                _hover={{
                  color: theme.accent.light,
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
