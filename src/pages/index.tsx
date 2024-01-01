import { useState, useEffect } from "react";
import useSWR from "swr";

// Chakra
import { Box, Center, Text, HStack, Image, Flex } from "@chakra-ui/react";

// Components
import Header from "@/components/Header";
import TechStack from "@/components/TechStack";

// Lib
import fetcher from "@/lib/fetcher";

// Interface
interface UserData {
  data: {
    discord_user: {
      avatar: string;
    };
    spotify: {
      song: string;
      artist: string;
      album_art_url: string;
      track_id: string;
    };
    discord_status: string;
  };
}

// Icons
import { FaMusic } from "react-icons/fa";
import { LuCode2 } from "react-icons/lu";

// Fonts
import { JetBrains_Mono } from "next/font/google";
import SpotifyBox from "@/components/SpotifyBox";
const JetBrainsMono = JetBrains_Mono({ subsets: ["latin"] });

export default function Index() {
  const [title, setTitle] = useState<string>("loading...");
  const [artist, setArtist] = useState<string>("loading...");
  const [cover, setCover] = useState<string>("loading...");
  const [track_id, setTrack_id] = useState<string>("loading...");
  const [dc_status, setDc_status] = useState<string>("loading...");
  const [avatar, setAvatar] = useState<string>("loading...");

  const { data, error } = useSWR<UserData>(
    "https://api.lanyard.rest/v1/users/763864687481323620",
    fetcher,
    {
      refreshInterval: 60000,
      revalidateOnFocus: true,
    }
  );

  useEffect(() => {
    if (data) {
      setTitle(data.data.spotify?.song);
      setArtist(data.data.spotify?.artist);
      setCover(data.data.spotify?.album_art_url);
      setTrack_id(data.data.spotify?.track_id);
      setDc_status(data.data.discord_status);
      setAvatar(data.data.discord_user.avatar);
    }
  }, [data]);

  return (
    <>
      <Header header="Home" />
      <Center>
        <Box
          w={{ base: "100vw", md: "70vw" }}
          p={"20px"}
          className={`${JetBrainsMono.className}`}
        >
          <HStack>
            <Image
              style={{ borderRadius: "50%" }}
              src={
                "https://cdn.discordapp.com/avatars/763864687481323620/" +
                avatar +
                ".png?size=1024"
              }
              boxSize={"55px"}
              placeholder="blur"
              loading="lazy"
            />
            <Text fontSize="3xl">
              Hey, I'm{" "}
              <Text
                as="span"
                className="username-gradient"
                /* color={"#877ab7"} */
                fontSize="3xl"
                _hover={{
                  borderBottom: "#877ab7 2px solid",
                  transition: "border-bottom 0.08s linear",
                }}
              >
                durpyneko
              </Text>
              !
            </Text>
            <Text fontSize="xl">{dc_status}</Text>
          </HStack>
          <Flex
            maxW={"6xl"}
            p={"2px"}
            margin={"10px"}
            backgroundColor={"#332e45"}
            borderRadius={"8px"}
          >
            <Text fontSize={"md"} p={"20px"}>
              {
                "Welcome to my site! I like to play video games and program in my freetime. I mostly program in JavaScript/Typescript and know a little how Rust works. I have a good understanding of Python."
              }
            </Text>
          </Flex>
          <Box px={{ base: "0", md: "50px" }}>
            <Box>
              <HStack>
                <Text as={LuCode2} fontSize={"2xl"}></Text>
                <Text fontSize={"2xl"} as={"u"}>
                  Tech stack
                </Text>
              </HStack>
              <TechStack />
            </Box>
            <Box mt={"10px"}>
              <HStack>
                <Text as={FaMusic} fontSize={"lg"}></Text>
                <Text fontSize={"2xl"} as={"u"}>
                  Music
                </Text>
              </HStack>
              <Text>• Black Metal, Djent</Text>
              <Text>• DnB, Breakcore</Text>
              <Text>• Techno</Text>
            </Box>
          </Box>
          <Box pt={"20px"} ml={"10px"}>
            <Text>Currently playing</Text>
            <SpotifyBox
              cover={cover}
              title={title}
              artist={artist}
              track_id={track_id}
            />
          </Box>
        </Box>
      </Center>
    </>
  );
}
