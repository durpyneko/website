import { Box, Button, Image, Link } from "@chakra-ui/react";

export default function KofiButton() {
  return (
    <Link href="https://ko-fi.com/durpyneko" target="_blank">
      <Box
        position="fixed"
        bottom="4"
        right="4"
        cursor="pointer"
        transition="transform 0.2s"
        _hover={{ transform: "scale(1.1)" }}
      >
        <Image
          src="ko-fi_logo.png"
          alt="Ko-fi Button"
          width="50px"
          height="50px"
        />
      </Box>
    </Link>
  );
}
