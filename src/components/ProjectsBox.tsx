// Chakra Imports
import {
  Box,
  Center,
  Text,
  Link,
  VStack,
  Image,
  Icon,
  HStack,
} from "@chakra-ui/react";
import { FiExternalLink } from "react-icons/fi";

export default function ProjectsBox({
  title,
  description,
  href,
  image,
}: {
  title: any;
  description: any;
  href: any;
  image: any;
}) {
  return (
    <>
      <Center p={"20px"}>
        <Box
          w={{ base: "360px", md: "300px" }} // Set to 300px on smaller screens
          h={{ base: "360px", md: "300px" }}
          backgroundColor={"#6b6091"}
          borderRadius={"25px"}
          padding={"20px"}
        >
          <Center h={"100%"}>
            <VStack>
              <Image
                src={image}
                h={"200px"}
                borderRadius={"8px"}
                marginTop={"-20px"}
                placeholder="blur"
                loading="lazy"
              />
              <HStack>
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
                    <Icon as={FiExternalLink} />
                  </Text>
                </Link>
              </HStack>
              <Text fontSize={{ base: "1xl", md: "md" }}>{description}</Text>
            </VStack>
          </Center>
        </Box>
      </Center>
    </>
  );
}
