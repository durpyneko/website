// Chakra
import { Box, Center, Text, Link } from "@chakra-ui/react";

// Components
import Header from "@/components/Header";

export default function About() {
  return (
    <Box
      css={{
        animation: "slideDown2 0.2s ease-in-out",
      }}
    >
      <Header header="About" />
      <Center>
        <Box w={{ base: "100vw", md: "70vw" }} p={"20px"}>
          <Center>
            <Text fontSize="2xl" fontWeight="medium">
              Site version: 2.2.6{" "}
            </Text>
          </Center>
          <Text fontSize="2xl" fontWeight="bold">
            # About me
          </Text>
          <Text
            fontSize="lg"
            mt={2}
            bg={"rgba(255, 255, 255, 0.05)"}
            backdropFilter={"blur(10px)"}
            border={"1px solid rgba(255, 255, 255, 0.2)"}
            padding={"10px"}
            borderRadius={"8px"}
          >
            Currently a freelance developer. I enjoy making scripts but I have
            found myself doing allot of web dev. Besides web dev I help maintain
            a portion of the backend services on{" "}
            <Link
              href="https://pixelboop.net"
              target="_blank"
              textDecor={"underline"}
            >
              pixelboop.net
            </Link>
            . I have also worked on other projects with{" "}
            <Link
              href="https://assassin.dev/"
              target="_blank"
              textDecor={"underline"}
            >
              Assassin
            </Link>
            . I am open to work on any projects.
          </Text>
          <Text fontSize="2xl" fontWeight="bold" mt={5}>
            # Commission / Requests
          </Text>
          <Text
            fontSize="lg"
            mt={2}
            bg={"rgba(255, 255, 255, 0.05)"}
            backdropFilter={"blur(10px)"}
            border={"1px solid rgba(255, 255, 255, 0.2)"}
            padding={"10px"}
            borderRadius={"8px"}
          >
            I will take commission requests for anything related to frontend,
            backend, software or scripts. You can contact me through{" "}
            <Text as={"span"} className="username-gradient">
              Discord
            </Text>{" "}
            or{" "}
            <Text as={"span"} className="username-gradient">
              Twitter
            </Text>{" "}
            via @
            <Text as={"span"} className="username-gradient">
              durpyneko
            </Text>
            . I will respond as soon as possible.
          </Text>
        </Box>
      </Center>
    </Box>
  );
}
