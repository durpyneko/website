// Chakra
import { Box, Image, VStack, Text, Link } from "@chakra-ui/react";

// Interface
interface SpotifyBoxProps {
  cover: string;
  title: string;
  artist: string;
  track_id: string;
}

export default function SpotifyBox({
  cover,
  title,
  artist,
  track_id,
}: SpotifyBoxProps) {
  return (
    <Box
      backgroundColor="#332e45"
      width={{ base: "80vw", md: "360px" }}
      maxW={{ base: "80vw", md: "360px" }}
      borderRadius="8px"
      display="flex"
      alignItems="center"
      padding="10px"
    >
      {cover ? (
        <>
          <Image
            src={cover}
            loading="eager"
            width="60px"
            height="60px"
            borderRadius="50%"
            objectFit="cover"
          />
          <VStack marginLeft="10px" alignItems="flex-start">
            <Link
              href={"https://open.spotify.com/track/" + track_id}
              target={"_blank"}
            >
              <Text fontSize="16px" fontWeight="bold" noOfLines={1}>
                {title}
              </Text>
            </Link>
            <Text fontSize="14px" noOfLines={1}>
              {artist}
            </Text>
          </VStack>
        </>
      ) : (
        <Text fontSize="16px" color="white">
          Nothing is currently playing
        </Text>
      )}
    </Box>
  );
}
