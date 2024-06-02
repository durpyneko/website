// React
import { useState, useEffect } from "react";
import useSWR from "swr";

// Next
import NextLink from "next/link";

// Chakra
import {
  Box,
  Center,
  Text,
  HStack,
  Flex,
  Avatar,
  AvatarBadge,
  Divider,
  Link,
  useTheme,
} from "@chakra-ui/react";

// Components
import Header from "@/components/Header";
import TechStack from "@/components/TechStack";
import SpotifyBox from "@/components/SpotifyBox";

// Lib
import fetcher from "@/lib/fetcher";

// Interface
interface Activity {
  name: string;
  timestamps: {
    start: number;
  };
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
      timestamps: {
        start: number;
        end: number;
      };
    };
    discord_status: string;
  };
}

// Icons
import { LuCode2 } from "react-icons/lu";
import { HiOutlineMusicalNote } from "react-icons/hi2";

// Fonts
import { JetBrains_Mono } from "next/font/google";
const JetBrainsMono = JetBrains_Mono({ subsets: ["latin"] });

export default function Index() {
  const theme = useTheme();

  const [title, setTitle] = useState<string | null>(null);
  const [artist, setArtist] = useState<string | null>(null);
  const [cover, setCover] = useState<string | null>(null);
  const [track_id, setTrack_id] = useState<string | null>(null);
  const [timestamps, setTimestamps] = useState<any>(null);
  const [dc_status, setDc_status] = useState<string | null>(null);
  const [avatar, setAvatar] = useState<string | null>(null);
  const [activities, setActivities] = useState<any | null>(null);
  const [time, setTime] = useState<any | null>(null);

  const { data, error } = useSWR<UserData>(
    "https://api.lanyard.rest/v1/users/763864687481323620",
    fetcher,
    {
      refreshInterval: 60000,
      revalidateOnFocus: true,
    }
  );

  function convertTime(time: number) {
    const date = new Date(time);
    const hours = date.getUTCHours().toString().padStart(2, "0");
    const minutes = date.getUTCMinutes().toString().padStart(2, "0");
    const seconds = date.getUTCSeconds().toString().padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  }

  useEffect(() => {
    if (data) {
      const { spotify, discord_status, discord_user, activities } = data.data;

      setTitle(spotify?.song);
      setArtist(spotify?.artist);
      setCover(spotify?.album_art_url);
      setTrack_id(spotify?.track_id);
      setTimestamps(spotify?.timestamps);
      setDc_status(discord_status);
      setAvatar(discord_user.avatar);

      const otherActivities = activities
        ?.filter((activity) => activity.name !== "Spotify")
        .map(({ name, timestamps }: any) => ({
          name: name || "No activity",
          startTimestamp:
            typeof timestamps.start === "string"
              ? parseInt(timestamps.start)
              : timestamps.start || 0,
        }));

      setActivities(otherActivities);

      const updateTimes = () => {
        const now = new Date();
        const updatedTimes = otherActivities.map((activity) =>
          convertTime(now.getTime() - activity.startTimestamp)
        );
        setTime(updatedTimes);
      };

      // initial update
      updateTimes();

      // set interval to update every second
      const intervalId = setInterval(updateTimes, 1000);

      return () => clearInterval(intervalId);
    }
  }, [data]);

  return (
    <Box>
      <Header header="Home" />
      <Center>
        <Box
          p={"10px"}
          className={`${JetBrainsMono.className}`}
          css={{
            animation: "slideDown2 0.2s ease-in-out",
          }}
        >
          <HStack>
            <Avatar
              size="md"
              src={`https://cdn.discordapp.com/avatars/763864687481323620/${avatar}.png?size=128`}
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
            <Text fontSize="3xl" ml={"8px"}>
              Hey, I'm{" "}
              <Text
                as="span"
                className="username-gradient"
                fontSize="3xl"
                _hover={{
                  borderBottom: `${theme.accent.light} 2px solid`,
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
            borderColor={"#ffffff50"}
            borderWidth={"1px"}
            borderRadius={"8px"}
            shadow={"xl"}
          >
            <Text fontSize={"md"} p={"20px"}>
              Welcome to my site! I am a frontend and software developer in my
              free time. My "favourite" game is War Thunder. Expanded{" "}
              <NextLink href="/about" passHref>
                <Text as={"span"} textDecor="underline">
                  here
                </Text>
              </NextLink>
            </Text>
          </Flex>
          <Box px={{ base: "0", md: "50px" }} mt={"20px"}>
            <Box>
              <HStack>
                <Text as={LuCode2} fontSize={"3xl"}></Text>
                <Text fontSize={"2xl"} as={"u"}>
                  Tech stack
                </Text>
              </HStack>
              <TechStack />
            </Box>
            <Box mt={"20px"}>
              <HStack>
                <Text as={HiOutlineMusicalNote} fontSize={"3xl"} pt={1}></Text>
                <Text fontSize={"2xl"} as={"u"}>
                  Music
                </Text>
              </HStack>
              <Box
                mt={"5px"}
                p={"10px"}
                borderColor={"#ffffff50"}
                borderWidth={"1px"}
                borderRadius={"8px"}
                shadow={"xl"}
              >
                <Text>• J-Metal/Rock, Metal, Djent</Text>
                <Text>• DnB, Breakcore</Text>
                <Text>• Techno</Text>
                <Text>• J-Pop</Text>
              </Box>
            </Box>
          </Box>
          <Center>
            <Flex
              mt={"20px"}
              direction={{ base: "column", md: "row" }}
              justifyContent={"center"}
            >
              <Box shadow={"xl"}>
                {cover && title && artist && track_id && (
                  <Box>
                    <Flex
                      p={2}
                      borderTopRadius={"8px"}
                      justifyContent="space-between"
                      borderColor={"#ffffff50"}
                      borderWidth={"1px"}
                    >
                      <Text>Now playing</Text>
                      <Text>—⠀❐⠀⤬</Text>
                    </Flex>
                    <SpotifyBox
                      cover={cover}
                      title={title}
                      artist={artist}
                      track_id={track_id}
                      timestamps={timestamps}
                    />
                  </Box>
                )}
              </Box>
              {activities && activities.length > 0 && (
                <Box
                  pt={{ base: "20px", md: "0" }}
                  ml={{ base: "0", md: "10px" }}
                >
                  <Flex
                    p={2}
                    borderTopRadius={"8px"}
                    justifyContent="space-between"
                    borderColor={"#ffffff50"}
                    borderWidth={"1px"}
                    borderBottom={"none"}
                  >
                    <Text>Activities</Text>
                    <Text>—⠀❐⠀⤬</Text>
                  </Flex>
                  <Divider bg={"grey"} />
                  {activities.map(({ name }: any, index: number) => (
                    <Box
                      key={index}
                      p={"10px"}
                      borderColor={"#ffffff50"}
                      borderWidth={"1px"}
                      borderTop={"none"}
                      shadow={"xl"}
                      width={{ base: "80vw", md: "360px" }}
                      maxW={{ base: "80vw", md: "360px" }}
                      height={"47px"}
                      borderBottomRadius={
                        index === activities.length - 1 ? "8px" : "0px"
                      }
                    >
                      <Text>
                        {name} - {time[index]}
                      </Text>
                    </Box>
                  ))}
                </Box>
              )}
            </Flex>
          </Center>
        </Box>
      </Center>
    </Box>
  );
}
