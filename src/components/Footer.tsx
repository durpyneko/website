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
      position="fixed"
      bottom="2"
      width="100%"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Center>
        <Text>
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
