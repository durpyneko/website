// Chakra
import { Box, Center, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function Footer() {
  const [randomKaomoji, setRandomKaomoji] = useState("");

  const date = new Date();

  const kaomojis = [
    "/ᐠ •ヮ• マ Ⳋ",
    "^•ﻌ•^ฅ♡",
    "/ᐠ_ ꞈ _ᐟ\\",
    "≽^- ˕ -^≼",
    "- ˕ •マ",
    "≽^•⩊•^≼",
    "/ᐠ - ⩊ -マ Ⳋ",
    "≽ ^ • ⩊ • ^ ≼",
    "/ᐠ. .ᐟ\\ฅ",
    "ฅ/ᐠ˶> ﻌ<˶ᐟ\\ฅ",
    "/ᐠﹷ ‸ ﹷ ᐟ\\ﾉ",
    "(≽^╥⩊╥^≼)",
  ];

  useEffect(() => {
    setRandomKaomoji(kaomojis[Math.floor(Math.random() * kaomojis.length)]);
  }, []);

  return (
    <Box
      width="100%"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Center>
        <Text
          // do text area only not parent/wrapping div
          /*  borderColor={"#ffffff50"}
          borderWidth={"1px"}
          borderBottom={"none"}
          borderTopRadius={10}
          backdropFilter="blur(20px)" 
          shadow={"xl"} */
          px={3}
          py={1}
        >
          <Box as={"span"} mr={2}>
            &#169; durpyneko {date.getFullYear()}
          </Box>
          |
          <Box as={"span"} ml={2}>
            {randomKaomoji}
          </Box>
        </Text>
      </Center>
    </Box>
  );
}
