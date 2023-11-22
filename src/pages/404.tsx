// Chakra
import { Center, Image, Text, Link, VStack, Icon } from "@chakra-ui/react";

// Next
import Head from "next/head";

// Icons
import { FiExternalLink } from "react-icons/fi";

export default function NotFound() {
  return (
    <>
      <Head>
        <title>404 Not Found</title>
      </Head>
      <Center>
        <VStack>
          <Link href="/">
            <Text fontSize={"4xl"}>
              {"<"}Home{">"}
              <Icon boxSize={"6"} as={FiExternalLink} />
            </Text>
          </Link>
          <Image
            alt="404"
            src="https://http.cat/images/404.jpg"
            w={{ base: "80vw", md: "40vw" }}
          ></Image>
        </VStack>
      </Center>
    </>
  );
}
