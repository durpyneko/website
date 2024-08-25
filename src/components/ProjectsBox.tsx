// Chakra
import {
  Box,
  Center,
  Text,
  Link,
  VStack,
  Image,
  HStack,
  useTheme,
} from "@chakra-ui/react";

// Icons
import { FaGithub } from "react-icons/fa";

// Interface
interface ProjectsBoxProps {
  title: string;
  description: string;
  href: string;
  image: string;
  github: string;
}

export default function ProjectsBox({
  title,
  description,
  href,
  image,
  github,
}: ProjectsBoxProps) {
  const theme = useTheme();
  return (
    <>
      <Center p={"20px"}>
        <Box
          w={{ base: "300px", md: "360px" }} // Set to 300px on smaller screens
          h={{ base: "300px", md: "360px" }}
          bg={"rgba(255, 255, 255, 0.05)"}
          backdropFilter={"blur(10px)"}
          border={"1px solid rgba(255, 255, 255, 0.2)"}
          borderRadius={"8px"}
          padding={"20px"}
          shadow={"xl"}
          css={{
            animation: "slideDown2 0.2s ease",
          }}
        >
          <Center h={"100%"}>
            <VStack>
              <Image
                src={image}
                h={{ base: "140px", md: "200px" }}
                borderRadius={"8px"}
                marginTop={"-20px"}
                placeholder="blur"
                loading="lazy"
              />
              <HStack alignItems="center">
                <Link
                  href={href}
                  target={"_blank"}
                  _hover={{
                    textDecoration: "none",
                    color: theme.accent.default,
                  }}
                >
                  <Text
                    fontSize={{ base: "2xl", md: "1xl" }}
                    borderBottom={"2px"}
                    borderColor={theme.accent.default}
                  >
                    {title}
                  </Text>
                </Link>
                {github && (
                  <Link href={github} target="_blank">
                    <FaGithub />
                  </Link>
                )}
              </HStack>
              <Text fontSize={{ base: "md", md: "1xl" }}>{description}</Text>
            </VStack>
          </Center>
        </Box>
      </Center>
    </>
  );
}
