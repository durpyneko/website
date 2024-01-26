import { useState, useEffect } from "react";
import useSWR from "swr";

// Chakra
import {
  Box,
  Center,
  Text,
  HStack,
  Image,
  Flex,
  Avatar,
  AvatarBadge,
} from "@chakra-ui/react";

// Components
import Header from "@/components/Header";
import TechStack from "@/components/TechStack";

// Lib
import fetcher from "@/lib/fetcher";

// Interface
interface Activity {
  name: string;
}
interface UserData {
  data: {
    discord_user: {
      avatar: string;
    };
    activities: Activity[];
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
  const [title, setTitle] = useState<string | null>(null);
  const [artist, setArtist] = useState<string | null>(null);
  const [cover, setCover] = useState<string | null>(null);
  const [track_id, setTrack_id] = useState<string | null>(null);
  const [dc_status, setDc_status] = useState<string | null>(null);
  const [avatar, setAvatar] = useState<string | null>(null);
  const [activities, setActivities] = useState<string[] | null>(null);

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
      const otherActivities = data.data.activities
        ?.filter((activity) => activity.name !== "Spotify")
        .map((activity) => activity.name || "No activity");

      setActivities(otherActivities);
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
            <Avatar
              size="md"
              src={`https://cdn.discordapp.com/avatars/763864687481323620/${avatar}.png?size=1024`}
            >
              <AvatarBadge
                boxSize="1em"
                bg={
                  dc_status === "online"
                    ? "green.400"
                    : dc_status === "idle"
                    ? "yellow.400"
                    : dc_status === "dnd"
                    ? "red.400"
                    : "gray.400"
                }
              />
            </Avatar>

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
                "Welcome to my site! I am a frontend and software developer in my freetime."
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
          <Flex
            mt={{ base: "10px", md: "20px" }}
            direction={{ base: "column", md: "row" }}
          >
            <Box pt={{ base: "20px", md: "0" }} ml={{ base: "0", md: "10px" }}>
              {cover && title && artist && track_id && (
                <Box>
                  <Text>Listening to:</Text>
                  <SpotifyBox
                    cover={cover}
                    title={title}
                    artist={artist}
                    track_id={track_id}
                  />
                </Box>
              )}
            </Box>
            {activities && activities.length > 0 && (
              <Box
                pt={{ base: "20px", md: "0" }}
                ml={{ base: "0", md: "10px" }}
              >
                <Text>Activities:</Text>
                {activities.map((activity, index) => (
                  <Box
                    key={index}
                    p={"10px"}
                    bgColor="#332e45"
                    width={{ base: "80vw", md: "360px" }}
                    maxW={{ base: "80vw", md: "360px" }}
                    borderTopRadius={index === 0 ? "8px" : "0px"}
                    borderBottomRadius={
                      index === activities.length - 1 ? "8px" : "0px"
                    }
                  >
                    <Text>{activity}</Text>
                  </Box>
                ))}
              </Box>
            )}
          </Flex>
        </Box>
      </Center>
    </>
  );
}
