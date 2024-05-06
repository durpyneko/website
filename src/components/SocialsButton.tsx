// React
import React, { useState, useEffect } from "react";

// Chakra
import {
  Box,
  Center,
  HStack,
  Icon,
  Text,
  Link,
  useTheme,
} from "@chakra-ui/react";

// Icons
import { FiExternalLink } from "react-icons/fi";

export default function SocialsButton({
  icon,
  href,
}: {
  icon: any;
  href: any;
}) {
  const theme = useTheme();

  const [siteTitle, setSiteTitle] = useState();

  useEffect(() => {
    const websiteNameMatch = href.match(/:\/\/(www\.)?([^/]+)\/?/);

    if (websiteNameMatch && websiteNameMatch[2]) {
      const websiteName = websiteNameMatch[2].replace(
        /\.(com|co|app|net|tv)$/,
        ""
      );

      const capitalizedWebsiteName =
        websiteName.charAt(0).toUpperCase() + websiteName.slice(1);

      setSiteTitle(capitalizedWebsiteName);
    } else {
      setSiteTitle(href);
    }
  }, [href]);
  return (
    <>
      <Box
        css={{
          animation: "slideDown 0.2s ease-in-out",
        }}
      >
        <Link
          href={href}
          target={"_blank"}
          _hover={{ textDecoration: "none", color: theme.accent.light }}
        >
          <Box
            w={{ base: "280px", md: "440px" }} // Set to 280px on smaller screens
            h={"60px"}
            p={"10px"}
            borderColor={"#ffffff50"}
            borderWidth={"1px"}
            borderRadius={"8px"}
            shadow={"xl"}
            title={siteTitle}
          >
            <Center h="100%">
              <HStack>
                <Icon boxSize={"6"} as={icon} />
                <Text>{siteTitle}</Text>
              </HStack>
            </Center>
          </Box>
          <Icon
            boxSize={"6"}
            float={"right"}
            marginTop={"-42"}
            marginRight={"5"}
            as={FiExternalLink}
          />
        </Link>
      </Box>
    </>
  );
}
