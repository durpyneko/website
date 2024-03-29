// Chakra
import {
  Box,
  Center,
  Text,
  Link,
  VStack,
  Image,
  HStack,
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
  return (
    <>
      <Center p={"20px"}>
        <Box
          w={{ base: "300px", md: "360px" }} // Set to 300px on smaller screens
          h={{ base: "300px", md: "360px" }}
          backgroundColor={"#6b6091"}
          borderRadius={"25px"}
          padding={"20px"}
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
                  _hover={{ textDecoration: "none", color: "#443d5c" }}
                >
                  <Text
                    fontSize={{ base: "2xl", md: "1xl" }}
                    borderBottom={"2px"}
                    borderColor={"#443d5c"}
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
