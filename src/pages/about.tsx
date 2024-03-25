// Chakra
import { Box, Center, Text, Checkbox, useTheme, Link } from "@chakra-ui/react";

// Components
import Header from "@/components/Header";

export default function About() {
  const theme = useTheme();
  return (
    <Box>
      <Header header="About" />
      <Center>
        <Box w={{ base: "100vw", md: "70vw" }} p={"20px"}>
          <Center>
            <Text fontSize="2xl" fontWeight="medium">
              Site version: 2.0.0{" "}
            </Text>
          </Center>
          <Text fontSize="2xl" fontWeight="bold">
            # About me
          </Text>
          <Text fontSize="lg" mt={2}>
            Currently a freelance developer. I enjoy making scripts but I have
            found myself doing allot of web dev. Besides web dev I help maintain
            a portion of the backend services on{" "}
            <Link
              href="https://pixelboop.net"
              target="_blank"
              textDecor={"underline"}
            >
              pixelboop.net.
            </Link>{" "}
            I have also worked on other projects with{" "}
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
          <Text fontSize="lg" mt={2}>
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
          <Text fontSize="2xl" fontWeight="bold" mt={5}>
            # Portfolio plans
          </Text>
          <Text fontSize="lg" mt={2}>
            <Checkbox
              size="lg"
              colorScheme="purple"
              borderColor={theme.colors.accent}
              /* isChecked */
              isReadOnly
              mt={2}
              cursor={"unset"}
            >
              Refactor code
            </Checkbox>
          </Text>
        </Box>
      </Center>
    </Box>
  );
}
