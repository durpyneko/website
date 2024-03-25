import { Box, Image, VStack, Text, Link, Divider } from "@chakra-ui/react";
import { useState, useEffect } from "react";

interface SpotifyBoxProps {
  cover: string;
  title: string;
  artist: string;
  track_id: string;
  timestamps: { start: number; end: number };
}

export default function SpotifyBox({
  cover,
  title,
  artist,
  track_id,
  timestamps,
}: SpotifyBoxProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = Date.now();
      const duration = timestamps?.end - timestamps?.start;
      const elapsed = now - timestamps?.start;
      if (duration && elapsed >= 0 && elapsed <= duration) {
        setProgress((elapsed / duration) * 100);
      } else {
        clearInterval(intervalId);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timestamps]);

  return (
    <Box
      backgroundColor="#332e45"
      width={{ base: "80vw", md: "360px" }}
      maxW={{ base: "80vw", md: "360px" }}
      borderBottomRadius={"8px"}
      display="flex"
      flexDirection="column"
      overflow="hidden"
      position="relative"
    >
      <Divider bg={"#474257"} />
      <Box
        display="flex"
        alignItems="center"
        padding="10px"
        flexDirection={"row"}
      >
        <Image
          src={cover}
          width="60px"
          height="60px"
          borderRadius="10%"
          objectFit="cover"
          mr={"10px"}
          mb={"10px"}
        />
        <VStack alignItems={"flex-start"} mt={"-10px"}>
          <Link
            href={"https://open.spotify.com/track/" + track_id}
            target={"_blank"}
          >
            <Text fontSize="16px" fontWeight="bold" noOfLines={1}>
              {title}
            </Text>
          </Link>
          <Text fontSize="14px" noOfLines={1} mt={"-10px"}>
            {artist}
          </Text>
        </VStack>
      </Box>
      <Box
        backgroundColor="#332e45"
        height="4px"
        width="100%"
        borderRadius="4px"
        overflow="hidden"
        position="relative"
      >
        <Box
          backgroundColor="#5a4b81"
          height="100%"
          width={`${progress}%`}
          borderRadius="4px"
          transition="width 0.2s"
          position="absolute"
          left="0"
          bottom="0"
        />
      </Box>
    </Box>
  );
}
