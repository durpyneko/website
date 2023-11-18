// React
import React, { useState, useEffect } from "react";

// Chakra Imports
import { Box, Center, HStack, Icon, Text, Link } from "@chakra-ui/react";

export default function SocialsButton({
  icon,
  href,
}: {
  icon: any;
  href: any;
}) {
  const [siteTitle, setSiteTitle] = useState();

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
          w={{ base: "280px", md: "440px" }} // Set to 280px on smaller screens
          h={"60px"}
          p={"10px"}
          backgroundColor={"#6b6091"}
          borderRadius={"25px"}
          title={siteTitle}
        >
          <Center h="100%">
            <HStack>
              <Icon boxSize={"6"} as={icon} />
              <Text>{siteTitle}</Text>
            </HStack>
          </Center>
        </Box>
      </Link>
    </>
  );
}
