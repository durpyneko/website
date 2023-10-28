// React
import React, { useState, useEffect } from "react";

// Chakra Imports
import { Box, Center, HStack, Icon, Text, Link } from "@chakra-ui/react";

export default function SocialsButton({
  title,
  icon,
  href,
}: {
  title: any;
  icon: any;
  href: any;
}) {
  const [siteTitle, setSiteTitle] = useState(title);

  useEffect(() => {
    const websiteNameMatch = href.match(/:\/\/(www\.)?([^/]+)\/?/);

    if (websiteNameMatch && websiteNameMatch[2]) {
      const websiteName = websiteNameMatch[2].replace(
        /\.(com|co|org|net|gov|edu|io)$/,
        ""
      );

      const capitalizedWebsiteName =
        websiteName.charAt(0).toUpperCase() + websiteName.slice(1);

      setSiteTitle(capitalizedWebsiteName);
    }
  }, [href]);
  return (
    <>
      <Link
        href={href}
        target={"_blank"}
        _hover={{ textDecoration: "none", color: "#443d5c" }}
      >
        <Box
          w={{ base: "400px", md: "600px" }} // Set to 400px on smaller screens
          h={"60px"}
          p={"10px"}
          backgroundColor={"#6b6091"}
          borderRadius={"25px"}
          title={siteTitle}
        >
          <Center h="100%">
            <HStack>
              <Icon boxSize={"6"} as={icon} />
              <Text>{title}</Text>
            </HStack>
          </Center>
        </Box>
      </Link>
    </>
  );
}
